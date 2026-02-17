
import { GoogleGenAI } from "@google/genai";
import { MapGroundingResult } from "../types";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getLocalContext = async (userLat?: number, userLng?: number): Promise<MapGroundingResult> => {
  const ai = getAIClient();
  const prompt = "Tell me about the area around Bishop Njenga Complex in Kiambu, Kenya. Mention its accessibility and what visitors can expect in the neighborhood (like banks or landmarks).";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: userLat && userLng ? {
              latitude: userLat,
              longitude: userLng
            } : {
              latitude: -1.1748, // Kiambu approximate
              longitude: 36.8304
            }
          }
        }
      },
    });

    const text = response.text || "Information about Kiambu surroundings.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const links = chunks
      .filter((chunk: any) => chunk.maps)
      .map((chunk: any) => ({
        title: chunk.maps.title,
        uri: chunk.maps.uri
      }));

    return { text, links };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "We are located at Bishop Njenga Complex, 2nd Floor, Kiambu. The area is central and easily accessible via public or private transport.",
      links: []
    };
  }
};

export const wellnessChat = async (message: string) => {
  const ai = getAIClient();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are a warm, empathetic assistant for Highly Aware Wellness Centre. Provide comforting, brief advice on mindfulness and emotional balance. Always suggest booking a session for deeper support.',
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
