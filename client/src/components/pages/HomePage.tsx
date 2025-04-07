import { GET_ALL_ROOMS } from "@/graphql/querues/room";
import { useQuery } from "@apollo/client";
import { Room } from "@/types/Room";
import RoomCard from "@/home/RoomCard";
const HomePage = () => {
  const { data, loading, error } = useQuery(GET_ALL_ROOMS);
  return (
    <main className="layout">
      <div>
        <h1 className="text-2xl font-bold">Top Trending hotel in Myanmar</h1>
        <p className="text-sm font-medium text-muted-foreground">
          Discover the most trending hotel for unforgettable experience.
        </p>
      </div>
      <div className="mt-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section className="grid grid-cols-4 gap-6">
            {data?.getAllRooms.map((room: Room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default HomePage;
