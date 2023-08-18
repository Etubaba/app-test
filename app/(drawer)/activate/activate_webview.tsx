import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { COLORS } from "../../../constants/Theme";
import ActivateWebView from "../../../screens/Home/ActivateWebView";

const activate_webview = () => {
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
      <ActivateWebView />
    </SafeAreaView>
  );
};

export default activate_webview;
