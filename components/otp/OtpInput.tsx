import { Image } from "expo-image";
import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  TextInput,
  View,
  ClipboardStatic,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { COLORS } from "../../constants/Theme";
import * as Clipboard from "expo-clipboard";
import Text from "../common/Text";
import * as Haptics from "expo-haptics";

const OtpInput = ({
  error,
  setCodeState,
}: {
  error?: boolean;
  setCodeState?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [countryCode, setCountryCode] = useState("ng");
  const [outline, setOutline] = useState(false);
  const [currentinput, setCurrentInput] = useState<number>();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const inputRef: RefObject<TextInput> = React.createRef();
  const deviceWidth = Dimensions.get("screen").width;
  // console.log(deviceWidth.toFixed());
  if (error) {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  }
  const handlePaste = async (event: string) => {
    const newOtp = event.slice(0, 6).split("");
    setOtp(newOtp);

    newOtp.forEach((digit, index) => {
      if (inputRef.current) {
        inputRef.current.setNativeProps({ text: digit });
        //  inputRef.current? = inputRef.current?.next;
      }
    });

    if (inputRef.current) {
      inputRef.current.focus();
    }

    //    signin
    //      ? handleOTPsubmit4Signin(pastedOtp.join(""))
    //      : handleOTPsubmit4Signup(pastedOtp.join(""));
  };
  const handleOnChange = async (value: string, index: number) => {
    // console.log(value, "here");

    if (value.length === 6) {
      await handlePaste(value);
    } else {
      const newOTP = [...otp];
      newOTP[index] = value.substring(value.length - 1);
      setOtp(newOTP);

      if (value === "") setCurrentInput(index - 1);
      else setCurrentInput(index + 1);

      if (currentinput === 5) {
        const otpCode = newOTP.join("");
        // signin
        //   ? handleOTPsubmit4Signin(otpCode)
        //   : handleOTPsubmit4Signup(otpCode);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentinput]);
  return (
    <View className="flex flex-col items-center">
      <View
        className={` my-5   flex-row items-center justify-center flex space-x-1`}
      >
        {otp.map((_, index) => (
          <TextInput
            returnKeyType="done"
            key={index}
            ref={index === currentinput ? inputRef : null}
            maxLength={1}
            onChangeText={(e) => handleOnChange(e, index)}
            value={otp[index]}
            cursorColor={COLORS.scudBlue}
            keyboardType="number-pad"
            className={` text-center outline-none border form-control border-red-500 ${
              error ? "border-red-500" : "border-bordercolor"
            }  focus:border-scudBlue  focus:outline-none focus:ring-1 focus:ring-scudBlue focus:ring-opacity-2 rounded-[10px] py-2  px-3 ${
              deviceWidth.toFixed() < "393" ? "w-10" : "w-12"
            }     text-base`}
            // onBlur={() => {
            //   setOutline(false);
            // }}
            // onFocus={() => {
            //   setOutline(true), setCurrentInput(index);
            // }}
          />
        ))}
      </View>
      {error && (
        <View className="flex mb-5 flex-row rounded-lg w-4/5 bg-scudRed/5 p-2 items-center  justify-center space-x-2  ">
          <MaterialIcons name="error-outline" size={20} color="red" />
          <Text EnableCStyle className="text-scudRed">
            You’ve entered an incorrect code
          </Text>
        </View>
      )}
    </View>
  );
};

export default OtpInput;
