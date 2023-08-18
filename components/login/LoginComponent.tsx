import { View, KeyboardAvoidingView, Keyboard, Platform } from "react-native";
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
import { useForm } from "react-hook-form";

const LoginComponent = () => {
  const TAB_WIDTH = 180;
  const offset = useSharedValue(0);

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

  const SwitchLoginMethod = () => {
    return (
      <View className="w-full rounded-lg my-3 p-3 relative bg-scudLightBlue justify-around items-center flex flex-row">
        <Animated.View
          className="rounded-lg p-4 absolute mx-1 shadow-lg  bg-white w-1/2 left-0"
          style={[animatedStyles]}
        />
        <TouchableOpacity onPress={() => handlePress("email")}>
          <Text EnableCStyle className="z-10">
            Email address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("phone")}>
          <Text EnableCStyle className="z-10">
            Phone number
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="h-full flex flex- relative   bg-white -mt-10 pt-10  space-y-2   px-5    w-full"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex justify-center items-center">
          <View className="rounded-[20px] p-[10px]   ">
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
          Login to your account
        </Text>
        <Text EnableCStyle className="text-center  mt-3 text-[14px]">
          Login with your email or mobile number
        </Text>
        <SwitchLoginMethod />
        <NumberInput control={control} />
        <View className="flex mb-5 flex-row items-center w-full justify-center space-x-2  ">
          <Text EnableCStyle className="text-textColor">
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text EnableCStyle className="text-scudBlue font-bold">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <View className="justify-end flex-1">
        <Button
          className="px-[20px]  py-[15px]  rounded-[10px]"
          onPress={() => {
            router.replace("/(auth)/otp/otp");
          }}
        >
          <Text EnableCStyle className="text-center text-white">
            Continue
          </Text>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginComponent;
