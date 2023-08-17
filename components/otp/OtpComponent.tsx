import { View, KeyboardAvoidingView, Keyboard, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Text from "../common/Text";
import NumberInput from "../register/NumberInput";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import Button from "../common/Button";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import OtpInput from "./OtpInput";

const OtpComponent = () => {
  const TAB_WIDTH = 180;
  const offset = useSharedValue(0);
  const DeviceHeight = Dimensions.get("window").height;
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const handlePress = (tab: string) => {
    const newOffset = (() => {
      switch (tab) {
        case "email":
          return 0;
        case "phone":
          return TAB_WIDTH;
        default:
          return 0;
      }
    })();

    offset.value = withTiming(newOffset);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="h-full flex-1 relative bg-white   flex-col items-center     pt-10  space-y-2   px-5    w-full"
    >
      <View className="bg-white shadow-2xl border w-full z-20   absolute -top-20  border-scudLightBlue p-3 rounded-2xl">
        <Text
          EnableCStyle
          className="text-center mt-2 tracking-wide text-scudDarkMode  text-[24px] font-bold"
        >
          Phone Verification
        </Text>
        <Text
          EnableCStyle
          className="text-center text-textColor  mt-3 text-[14px]"
        >
          Enter the 6 digit code sent to {"\n"} 09093284414
        </Text>
        <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
          <OtpInput />
        </TouchableWithoutFeedback>

        <View className="flex mb-5 flex-row rounded-lg bg-scudLightBlue p-3 items-center w-full justify-center space-x-2  ">
          <Text EnableCStyle className="text-textColor">
            Didn't receive the code?
          </Text>
          <TouchableOpacity>
            <Text EnableCStyle className="text-scudBlue font-bold">
              Resend
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="justify-end mb-10 flex-1   w-full">
        <View
          className={
            DeviceHeight <= 736
              ? "flex mb-5 flex-row  relative bottom-[30%] p-3 items-center w-full justify-center space-x-2  "
              : "flex mb-5 flex-row  relative bottom-[60%] p-3 items-center w-full justify-center space-x-2  "
          }
        >
          <Text EnableCStyle className="text-textColor">
            Wrong number?
          </Text>
          <TouchableOpacity>
            <Text EnableCStyle className="text-scudBlue ">
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          className="px-[20px]  py-[15px]  rounded-[10px]"
          onPress={() => {
            router.push("/(auth)/otp/otp");
          }}
        >
          <Text EnableCStyle className="text-center text-white">
            Verify now
          </Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpComponent;
