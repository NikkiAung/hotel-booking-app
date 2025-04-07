import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useLazyQuery, useQuery } from "@apollo/client";
import { CURRENT_USER, LOG_OUT } from "@/graphql/querues/user";
import {
  isAuthenticatedVar,
  userInfoVar,
  isLoadingVar,
} from "@/apollo/apollo-vars";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const navigate = useNavigate();
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
  const [logout] = useLazyQuery(LOG_OUT, {
    onCompleted: () => {
      navigate(0);
    },
  });
  const logOutHandler = () => {
    logout();
  };
  return (
    <nav className="flex items-center justify-between layout py-10">
      <Link to="/" className="text-4xl font-extrabold">
        Bagan Hotel
      </Link>
      <div className="space-x-4">
        {data?.currentUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-1">
              <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className="bg-black text-white font-bold">
                  {data.currentUser.name.substring(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h2 className="text-sm font-bold">{data.currentUser.name}</h2>
                <p className="text-xs font-medium text-gray-600">
                  {data.currentUser.email}
                </p>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={logOutHandler}>
                <span className="text-red-400">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
