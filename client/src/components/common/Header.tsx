import { Link } from "react-router";
import { Button } from "../ui/button";
import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "@/graphql/querues/user";
import {
  isAuthenticatedVar,
  userInfoVar,
  isLoadingVar,
} from "@/apollo/apollo-vars";

const Header = () => {
  const { data, loading } = useQuery(CURRENT_USER, {
    onCompleted: (data) => {
      userInfoVar(data.currentUser);
      isAuthenticatedVar(true);
      isLoadingVar(false);
    },
    onError: () => {
      userInfoVar(null);
      isAuthenticatedVar(false);
      isLoadingVar(false);
    },
  });
  return (
    <nav className="flex items-center justify-between layout py-10">
      <Link to="/" className="text-4xl font-extrabold">
        Bagan Hotel
      </Link>
      <div className="space-x-4">
        {data.currentUser ? (
          <div>User Found!</div>
        ) : (
          <>
            <Button asChild>
              <Link to="/register">Register</Link>
            </Button>
            <Button variant={"outline"} asChild>
              <Link to="/login">Login</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
