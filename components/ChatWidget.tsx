
import React, { useState } from 'react';
import { wellnessChat } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await wellnessChat(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response || "I'm here to listen." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having a quiet moment. Please call us at 0703 149876." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col border border-gray-100 overflow-hidden fade-in">
          <div className="bg-[#4A5D4E] p-4 flex justify-between items-center text-white">
            <span className="font-serif italic">Wellness Companion</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center italic mt-10">How are you feeling today?</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${m.role === 'user' ? 'bg-[#5B7A8C] text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-gray-400 italic">Thinking...</div>}
          </div>
          <div className="p-4 border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for a mindfulness tip..."
              className="flex-1 bg-gray-50 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-[#4A5D4E]"
            />
            <button onClick={handleSend} className="bg-[#4A5D4E] text-white p-2 rounded-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#4A5D4E] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="font-serif italic pr-2">Assistance</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
