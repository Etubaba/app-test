import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "../styles/global.css";
import { useCallback, useEffect } from "react";
import { useOnBoardingStore } from "../features/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";

import { Provider } from "../Provider/auth";

SplashScreen.preventAutoHideAsync();

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    Gilroy: require("../assets/fonts/Gilroy-Medium.ttf"),
  });
  const { IsFirstTimeLoad, setIsFirstTimeLoad } = useOnBoardingStore(
    (state) => state
  );

  if (IsFirstTimeLoad == null) setIsFirstTimeLoad(true);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // setTimeout(SplashScreen.hideAsync, 3000);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider>
        <Stack />
      </Provider>
    </SafeAreaProvider>
  );
}
