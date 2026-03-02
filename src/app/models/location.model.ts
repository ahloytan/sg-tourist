export interface Location {
  id: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  category: 'attraction' | 'food';
  imageUrl: string;
  openingHours?: string;
  phone?: string;
  website?: string;
  rating?: number;
  mustVisit?: boolean;
  highlightGroup?: 'tourist' | 'nature' | 'local';
}
