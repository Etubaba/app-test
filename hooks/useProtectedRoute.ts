import { router, useRootNavigationState } from "expo-router";
import { useSegments } from "expo-router/src/hooks";
import React from "react";





function useProtectedRoute(user: any) {
    const segments = useSegments();
    const rootNavigationState = useRootNavigationState();

    // console.log(segments, rootNavigationState);


    React.useEffect(() => {
        if (rootNavigationState?.key) {
            const inAuthGroup = segments[0] === "(auth)";

            if (
                // If the user is not signed in and the initial segment is not anything in the auth group.
                // user == null || !isLoggedIn &&
                // !inAuthGroup
                user == null &&
                !inAuthGroup
            ) {
                router.push("/register");
            } else if (user && inAuthGroup) {
                router.push("/");
            }
        }

    }, [user, segments, rootNavigationState]);
}

export default useProtectedRoute