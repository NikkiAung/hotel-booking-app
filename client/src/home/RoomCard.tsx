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
import { cn } from "@/lib/utils";
import { useState } from "react";

type RoomCardProps = {
  room: Room;
};
const RoomCard = ({ room }: RoomCardProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link to={`/room/${room.id}`}>
      {loading && (
        <div className="w-full aspect-video bg-gray-300 flex items-center justify-center rounded-lg animate-pulse">
          <p>loading</p>
        </div>
      )}
      <img
        src={room.images[0].url}
        alt="Room Image"
        className={cn("rounded-lg aspect-video", loading ? "hidden" : "block")}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
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
