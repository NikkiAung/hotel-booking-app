import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_ROOM_BY_ID } from "@/graphql/querues/room";
import { Room } from "@/types/Room";
import {
  BadgeCheck,
  CircleX,
  Divide,
  Hash,
  House,
  MapPin,
  Users,
} from "lucide-react";

const DetailPage = () => {
  const params = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_ROOM_BY_ID, {
    variables: { roomId: params.id },
  });

  // Guard clause for loading or missing data
  if (loading || !data?.getRoomById) {
    return <p>Loading...</p>;
  }

  const {
    isAvailable,
    images,
    location,
    pricePerNight,
    roomNumber,
    reviews,
    description,
    title,
    capacity,
    type,
  }: Room = data.getRoomById;

  const items = [
    {
      value: capacity,
      icon: <Users className="w-5 h-5" />,
    },
    {
      value: type,
      icon: <House className="w-5 h-5" />,
    },
    {
      value: location,
      icon: <MapPin className="w-5 h-5" />,
    },
  ];
  return (
    <main className="layout">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img src={images[0].url} alt={title} className="aspect-video" />
        </div>
        <div>
          <h2 className="text-sky-200xl font-bold mb-2">{title}</h2>
          <div className="flex items-center text-sm font-medium text-gray-400">
            <Hash className="w-5 h-5" /> {roomNumber}
            {isAvailable ? (
              <BadgeCheck className="w-5 h-5 text-green-500 ms-2" />
            ) : (
              <CircleX className="w-5 h-5 text-red-500 ms-2" />
            )}
          </div>
          <p className="text-sm font-medium text-gray-400 mt-4">
            {description}
          </p>
          <p className="text-3xl font-bold my-4">$ {pricePerNight}</p>
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
            Reviews ({reviews.length})
          </p>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
