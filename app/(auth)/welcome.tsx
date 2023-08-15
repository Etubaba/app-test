import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import OnBoarding from "../../screens/onBoarding";
import { Stack } from "expo-router";

const welcome = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <OnBoarding />
    </>
  );
};

export default welcome;
