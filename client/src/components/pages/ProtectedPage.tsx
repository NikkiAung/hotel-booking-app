import { useReactiveVar } from "@apollo/client";
import {
  isLoadingVar,
  isAuthenticatedVar,
  userInfoVar,
} from "@/apollo/apollo-vars";
import Loader from "../common/Loader";
import { Navigate } from "react-router";

type ProtectedPageProps = {
  roles?: string[];
  children: React.ReactNode;
};

const ProtectedPage = ({ roles, children }: ProtectedPageProps) => {
  const isLoading = useReactiveVar(isLoadingVar);
  const isAuthenticated = useReactiveVar(isAuthenticatedVar);
  const userInfo = useReactiveVar(userInfoVar);
  if (isLoading) return <Loader />;

  if (!isAuthenticated) return <Navigate to={"/login "} />;

  if (roles && !roles.some((role: string) => userInfo?.role?.includes(role))) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
};

export default ProtectedPage;
