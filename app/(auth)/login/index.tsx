import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import { Stack, router } from "expo-router";
import { COLORS } from "../../../constants/Theme";
import LoginComponent from "../../../components/login/LoginComponent";

const login = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <StatusBar style="auto" backgroundColor="#ffffff00" />
      <Stack.Screen
        options={{
          title: "",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: COLORS.scudWhite },
          headerTintColor: "#000",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <LoginComponent />
    </SafeAreaView>
  );
};

export default login;
