import { View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Text from "../common/Text";
import NumberInput from "./NumberInput";

const FooterSheet = ({}) => {
  return (
    <View className="h-2/5  z-50 rounded-t-[13px]  space-y-2  absolute px-5 bottom-0 bg-white  w-full">
      <View className="flex justify-center items-center">
        <View className="bg-white rounded-[20px] p-[10px]  -mt-6 ">
          <Image
            contentFit="cover"
            source={require("../../assets/adaptive-icon.png")}
            style={{ height: 45, width: 45 }}
            className="rounded-[10px]"
          />
        </View>
      </View>
      <Text
        EnableCStyle
        className="text-center mt-2 tracking-wide text-scudBlue  text-[24px] font-bold"
      >
        Welcome To Scud!
      </Text>
      <Text EnableCStyle className="text-center  text-[14px]">
        Sign up with your phone number
      </Text>

      <NumberInput />

      <View className="flex flex-row space-x-2  ">
        <Text EnableCStyle className="text-textColor">
          Already have an account?
        </Text>
        <Text EnableCStyle className="text-scudBlue font-bold">
          Log in
        </Text>
      </View>
    </View>
  );
};

export default FooterSheet;
