import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_ROOM_BY_ID } from "@/graphql/querues/room";
import { Room } from "@/types/Room";
import Loader from "../common/Loader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { BadgeCheck, CircleX, Hash, House, MapPin, Users } from "lucide-react";

const DetailPage = () => {
  const params = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_ROOM_BY_ID, {
    variables: { roomId: params.id },
  });

  const room: Room = data?.getRoomById;

  const items = room
    ? [
        {
          value: room.capacity,
          icon: <Users className="w-5 h-5" />,
        },
        {
          value: room.type,
          icon: <House className="w-5 h-5" />,
        },
        {
          value: room.location,
          icon: <MapPin className="w-5 h-5" />,
        },
      ]
    : [];
  return (
    <main className="layout">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Carousel>
              <CarouselContent>
                {room?.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      className="aspect-square rounded-lg object-cover"
                      src={image.url}
                      alt={image.public_id}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <h2 className="text-sky-200xl font-bold mb-2">{room.title}</h2>
            <div className="flex items-center text-sm font-medium text-gray-400">
              <Hash className="w-5 h-5" /> {room.roomNumber}
              {room.isAvailable ? (
                <BadgeCheck className="w-5 h-5 text-green-500 ms-2" />
              ) : (
                <CircleX className="w-5 h-5 text-red-500 ms-2" />
              )}
            </div>
            <p className="text-sm font-medium text-gray-400 mt-4">
              {room.description}
            </p>
            <p className="text-3xl font-bold my-4">$ {room.pricePerNight}</p>
            <div className="flex items-center justify-center gap-10 gap-4 border-2 border-gray-400 rounded-md p-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-yellow-500 font-sm text-medium">
              Reviews ({room.reviews.length})
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default DetailPage;
