import { makeVar } from "@apollo/client";
import { User } from "../types/User";

export const isAuthenticatedVar = makeVar<boolean>(false);
export const userInfoVar = makeVar<null | User>(null);
export const isLoadingVar = makeVar(true);
