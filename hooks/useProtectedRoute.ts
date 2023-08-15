import { router, useRootNavigationState } from "expo-router";
import { useSegments } from "expo-router/src/hooks";
import React from "react";

function useProtectedRoute(user: any, IsFirstTimeLoad: any) {
  const segments = useSegments();
  const rootNavigationState = useRootNavigationState();

  // console.timeLog()

  React.useEffect(() => {
    if (rootNavigationState?.key) {
      const inAuthGroup = segments[0] === "(auth)";
      // console.log(segments, IsFirstTimeLoad);
      if (user == null && !inAuthGroup) {
        // router.push("/register")
        if (IsFirstTimeLoad) {
          router.push("/welcome");
        } else {
          router.push("/register");
        }
      } else if (user && inAuthGroup) {
        router.push("/");
      }
    }
  }, [user, segments, rootNavigationState]);
}

export default useProtectedRoute;
