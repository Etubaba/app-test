import { View, Text } from "react-native";
import React from "react";
import {
  Redirect,
  SplashScreen,
  Stack,
  useRootNavigationState,
} from "expo-router";

const index = () => {
  SplashScreen.preventAutoHideAsync();

  const rootNavigationState = useRootNavigationState();
  if (rootNavigationState.key) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <Redirect href={"/(drawer)/home"} />
      </>
    );
  }
};

export default index;
