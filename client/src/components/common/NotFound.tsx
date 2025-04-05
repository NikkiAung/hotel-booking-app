import { Link } from "react-router";
import { Button } from "../ui/button";
const NotFound = () => {
  return (
    <div className="layout">
      <h1 className="text-7xl font-bold text-center mt-20">404 not found</h1>
      <div className="flex justify-center mt-6">
        <Button asChild>
          <Link to={"/"}>Go back HomePage </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
