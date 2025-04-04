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
import { Link } from "react-router";

type RoomCardProps = {
  room: Room;
};
const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Link to={`/room/${room.id}`}>
      <img
        src={room.images[0].url}
        alt="Room Image"
        className="rounded-lg aspect-video"
      />
      <div>
        <h2 className="text-lg font-bold mt-1">{room.title}</h2>
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
    </Link>
  );
};

export default RoomCard;
