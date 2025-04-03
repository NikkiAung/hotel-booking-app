import { GET_ALL_ROOMS } from "@/graphql/querues/room";
import { useQuery } from "@apollo/client";
const HomePage = () => {
  const { data, loading, error } = useQuery(GET_ALL_ROOMS);
  console.log(data, loading, error);
  return <div className="layout">HomePage</div>;
};

export default HomePage;
