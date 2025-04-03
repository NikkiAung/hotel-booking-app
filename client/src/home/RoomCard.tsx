import { Room } from "@/types/Room";
import { MapPin, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RoomCardProps = {
  room: Room;
};
const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <div className="">
      <img
        src={room.images[0].url}
        alt="Room Image"
        className="rounded-lg aspect-video"
      />
      <div>
        <MapPin className="inline w-5 h-5 text-gray-400 mr-1" />{" "}
        <span className="text-sm font-medium text-gray-400">
          {room.location}
        </span>
        <div></div>
        <Star className="inline w-5 h-5 text-gray-400 mr-1" />{" "}
        <span className="text-sm font-medium text-gray-400">
          {room.reviews.length}
        </span>
      </div>
      <p className="font-bold text-xl">$ {room.pricePerNight}</p>
      <span className="text-xs text-gray-400">price per night</span>
    </div>
  );
};

export default RoomCard;
