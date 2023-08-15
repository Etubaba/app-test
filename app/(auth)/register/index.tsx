import { View, Text, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../../hooks/useAuth";
import { AuthContextType } from "../../../interface";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import FooterSheet from "../../../components/register/FooterSheet";

const register = () => {
  const authContext = useAuth();
  const { width, height } = Dimensions.get("window");

  return (
    <View className="bg-black">
      <StatusBar backgroundColor="transparent" style="light" />
      <Image
        contentFit="cover"
        source={require("../../../assets/onBoardingBG.png")}
        style={{ height: "100%", width: width }}
      />
      <FooterSheet />
    </View>
  );
};

export default register;
