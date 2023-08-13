import { Slot, useNavigation, useRootNavigationState } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "../styles/global.css";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useCallback, useEffect } from "react";
import { useScudStore } from "../features/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerItems from "../components/SideNav/DrawerItems";
import React from "react";
import NavLink from "../components/SideNav/NavLinks";
import UserHeader from "../components/SideNav/UserHeader";
import { Provider } from "../Provider/auth";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const ScudStore = useScudStore((state) => state);

  useEffect(() => {
    ScudStore.setDrawerProps(props);
  }, []);
  return (
    <>
      <UserHeader />
      <DrawerContentScrollView className="dark:bg-slate-800" {...props}>
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
      </DrawerContentScrollView>
    </>
  );
}
SplashScreen.preventAutoHideAsync();

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    Gilroy: require("../assets/fonts/Gilroy-Medium.ttf"),
  });
  const rootNavigationState = useRootNavigationState();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
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
            },
          }}
        />
      </Provider>
    </SafeAreaProvider>
  );
}
