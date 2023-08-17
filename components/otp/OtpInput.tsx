import { Image } from "expo-image";
import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  TextInput,
  View,
  ClipboardStatic,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { COLORS } from "../../constants/Theme";
import * as Clipboard from "expo-clipboard";

const OtpInput = () => {
  const [countryCode, setCountryCode] = useState("ng");
  const [outline, setOutline] = useState(false);
  const [currentinput, setCurrentInput] = useState<number>();
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const inputRef: RefObject<TextInput> = React.createRef();

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
    console.log(value, "here");

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
    <View
      className={`w-full my-5   flex-row items-center justify-center flex space-x-1`}
    >
      {otp.map((_, index) => (
        <TextInput
          key={index}
          ref={index === currentinput ? inputRef : null}
          // maxLength={1}
          onChangeText={(e) => handleOnChange(e, index)}
          value={otp[index]}
          cursorColor={COLORS.scudBlue}
          keyboardType="number-pad"
          className={` text-center outline-none border form-control border-bordercolor  focus:border-scudBlue  focus:outline-none focus:ring-1 focus:ring-scudBlue focus:ring-opacity-2 rounded-[10px] py-2  px-3 w-12     text-base`}
          // onBlur={() => {
          //   setOutline(false);
          // }}
          // onFocus={() => {
          //   setOutline(true), setCurrentInput(index);
          // }}
        />
      ))}
    </View>
  );
};

export default OtpInput;
