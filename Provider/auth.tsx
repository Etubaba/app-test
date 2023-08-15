import { router, useSegments } from "expo-router";
import React, { ReactNode } from "react";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { AuthContextType } from "../interface";
import { useOnBoardingStore, useUserStore } from "../features/store";

export const AuthContext = React.createContext<AuthContextType | null>(null);

type Props = {
  children?: ReactNode;
};

export function Provider(props: Props) {
  const [isLoggedIn, user, setIsLoggedIn, setUserDetails] = useUserStore(
    (state) => [
      state.isLoggedIn,
      state.userDetails,
      state.setIsLoggedIn,
      state.setUserDetails,
    ]
    // shallow
  );

  const { IsFirstTimeLoad } = useOnBoardingStore((state) => state);

  useProtectedRoute(user, IsFirstTimeLoad);

  return (
    <AuthContext.Provider
      value={{
        signIn: (e) => {
          setUserDetails(e);
        },
        signOut: () => {
          setUserDetails(null);
        },
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
function shallow(a: [boolean, any], b: [boolean, any]): boolean {
  throw new Error("Function not implemented.");
}
