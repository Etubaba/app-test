import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import OnBoarding from "../../screens/onBoarding";

const welcome = () => {
  return <OnBoarding />;
};

export default welcome;
