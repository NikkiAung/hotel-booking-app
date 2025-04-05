import { Link } from "react-router";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="flex items-center justify-between layout py-10">
      <Link to="/" className="text-4xl font-extrabold">
        Bagan Hotel
      </Link>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
