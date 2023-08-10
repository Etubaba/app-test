import { Slot, useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { View, Text } from "react-native";
import "../styles/global.css";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { useEffect } from "react";
import { useScudStore } from "../features/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const ScudStore = useScudStore((state) => state);

  useEffect(() => {
    ScudStore.setDrawerProps(props);
  }, []);
  return (
    <View className="mt-20">
      <Text
      // onPress={() => {
      //   props.navigation.closeDrawer(), console.log(props.state);
      // }}
      >
        Close drawer
      </Text>
      {/* <Text onPress={() => props.navigation.toggleDrawer()}>open drawer</Text> */}
    </View>
  );
}

export default function () {
  return (
    <>
      <SafeAreaProvider>
        <Drawer
          defaultStatus="closed"
          drawerContent={(props: DrawerContentComponentProps) => (
            <CustomDrawerContent {...props} />
          )}
          screenOptions={{
            headerShown: false,
            drawerType: "front",
          }}
        />
      </SafeAreaProvider>
    </>
  );
}
