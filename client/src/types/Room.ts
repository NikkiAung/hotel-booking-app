export type Room = {
  roomNumber?: string;
  id: string;
  title?: string;
  description?: string;
  type?: string;
  pricePerNight: number;
  capacity?: number;
  isAvailable?: boolean;
  images: RoomImage[];
  reviews: string[];
  location: string;
  createdAt?: string;
  updatedAt?: string;
};

type RoomImage = {
  url: string;
  public_id: string;
};
