import { Drawer } from "expo-router/drawer";
import { useScudStore, useThemeStore } from "../../features/store";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useEffect } from "react";
import UserHeader from "../../components/SideNav/UserHeader";
import { ScrollView } from "react-native-gesture-handler";
import NavLink from "../../components/SideNav/NavLinks";
import DrawerItems from "../../components/SideNav/DrawerItems";
import { COLORS } from "../../constants/Theme";
import { modes } from "../../interface";
import { Stack } from "expo-router";

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
export default function () {
  const { theme } = useThemeStore((state) => state);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
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
    </>
  );
}
