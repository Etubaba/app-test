import { useRootNavigationState } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "../styles/global.css";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useCallback, useEffect } from "react";
import {
  useOnBoardingStore,
  useScudStore,
  useThemeStore,
} from "../features/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerItems from "../components/SideNav/DrawerItems";
import React from "react";
import NavLink from "../components/SideNav/NavLinks";
import UserHeader from "../components/SideNav/UserHeader";
import { Provider } from "../Provider/auth";
import { modes } from "../interface";
import { COLORS } from "../constants/Theme";
import { ScrollView } from "react-native-gesture-handler";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const ScudStore = useScudStore((state) => state);

  useEffect(() => {
    ScudStore.setDrawerProps(props);
  }, []);
  return (
    <>
      <UserHeader />
      <ScrollView className="" {...props}>
        {NavLink().map((items, index) => (
          <DrawerItems
            key={index}
            label={items.name}
            onPress={() => {
              ("");
            }}
            icon={items.icon}
          />
        ))}
      </ScrollView>
    </>
  );
}
SplashScreen.preventAutoHideAsync();

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    Gilroy: require("../assets/fonts/Gilroy-Medium.ttf"),
  });
  const { theme } = useThemeStore((state) => state);
  const { IsFirstTimeLoad, setIsFirstTimeLoad } = useOnBoardingStore(
    (state) => state
  );

  const rootNavigationState = useRootNavigationState();
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
        <Drawer
          defaultStatus="closed"
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawerContent {...props} />
          )}
          screenOptions={{
            // drawerHideStatusBarOnOpen: true,
            swipeEnabled: false,
            headerShown: false,
            drawerType: "front",
            drawerStyle: {
              borderBottomEndRadius: 50,
              borderTopEndRadius: 50,
              backgroundColor:
                theme == modes.light ? COLORS.scudWhite : COLORS.scudDarkMode2,
            },
          }}
        />
      </Provider>
    </SafeAreaProvider>
  );
}
