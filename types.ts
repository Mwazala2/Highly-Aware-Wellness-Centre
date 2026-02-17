
export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface MapGroundingResult {
  text: string;
  links: Array<{
    title: string;
    uri: string;
  }>;
}
