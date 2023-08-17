import {
  View,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import Text from "../common/Text";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import Button from "../common/Button";
import OtpInput from "./OtpInput";
import useAuth from "../../hooks/useAuth";

const OtpComponent = () => {
  const DeviceHeight = Dimensions.get("window").height;
  const Login = useAuth();
  return (
    <KeyboardAvoidingView
      // behavior="padding"
      className="h-full relative bg-white     flex-col items-center     pt-10  space-y-2   px-5    w-full"
    >
      <View className="bg-white shadow-2xl border w-full z-20 space-y-3   absolute -top-20  border-scudLightBlue p-3 pb-10 rounded-2xl">
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
          <OtpInput error={false} />
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
        <View
          className={
            DeviceHeight <= 736
              ? "flex  flex-row -mb-20  p-3 items-center w-full justify-center space-x-2  "
              : "flex -mb-20 flex-row   p-3 items-center w-full justify-center space-x-2  "
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
      </View>

      <View
        className={
          Platform.OS == "android"
            ? " flex-1 h-[65%] absolute  justify-end   w-full"
            : " flex-1 absolute  h-[70%]   justify-end  w-full"
        }
      >
        <Button
          className="px-[20px]  py-[15px]   rounded-[10px]"
          onPress={() => {
            Login?.signIn({ name: "abat" });
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
