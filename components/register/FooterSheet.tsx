import {
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import Text from "../common/Text";
import NumberInput from "./NumberInput";
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import Button from "../common/Button";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

const FooterSheet = ({}) => {
  const [KeyBoardIsOpen, setKeyBoardIsOpen] = useState(false);
  const DeviceHeight = Dimensions.get("window").height;
  const height = useSharedValue(380);

  const handleKeyboardDidShow = () => {
    setKeyBoardIsOpen(!KeyBoardIsOpen);
  };

  useEffect(() => {
    if (KeyBoardIsOpen) {
      height.value = withSpring(530);
    } else {
      height.value = withSpring(380);
    }
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardDidShow
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [KeyBoardIsOpen]);

  return (
    <Animated.View
      style={{
        height: Platform.OS == "ios" && KeyBoardIsOpen ? height : 380,
      }}
      className={` ${
        DeviceHeight <= 736 ? "h-[50%] " : "h-[45%]"
      } z-50 rounded-t-[13px] space-y-2  absolute px-5 bottom-0 bg-white  w-full`}
    >
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

      <View className="flex mb-5 flex-row space-x-2  ">
        <Text EnableCStyle className="text-textColor">
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Link replace href={"/(auth)/login/"}>
            <Text EnableCStyle className="text-scudBlue font-bold">
              Log in
            </Text>
          </Link>
        </TouchableOpacity>
      </View>

      <View className="flex mb-[23.25px] mt-5 space-x-1 items-center flex-row">
        <Checkbox className="w-4 h-4 border-0.5" />
        <View className="flex space-x-1 items-center flex-row">
          <Text>I accept the company's</Text>
          <Text EnableCStyle className="text-scudBlue ">
            terms
          </Text>
          <Text>and</Text>
          <Text EnableCStyle className="text-scudBlue">
            privacy policy
          </Text>
        </View>
      </View>

      <Button
        className="px-[20px]  py-[15px] rounded-[10px]"
        onPress={() => {
          return;
        }}
      >
        <Text EnableCStyle className="text-center text-white">
          Continue
        </Text>
      </Button>
    </Animated.View>
  );
};

export default FooterSheet;
