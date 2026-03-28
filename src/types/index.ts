export interface Story {
  id: string;
  title: string;
  content: string;
  curatedContent: string;
  location: string;
  coordinates: { lat: number; lng: number };
  image: string;
  author: string;
  date: string;
  category: string;
}

export interface MapPin {
  id: string;
  coordinates: { lat: number; lng: number };
  storyId: string;
}
