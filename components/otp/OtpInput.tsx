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
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<TextInput[]>([]);

  const inputRef: RefObject<TextInput> = React.createRef();

  const handlePaste = async (event: string) => {
    // event.preventDefault();
    const clipboardData = await navigator.clipboard.readText();
    const pastedOtp = event.substring(0, 6).split("");

    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      pastedOtp.forEach((digit, index) => {
        if (index < newOtp.length) {
          newOtp[index] = digit;
        }
      });
      return newOtp;
    });
    //    signin
    //      ? handleOTPsubmit4Signin(pastedOtp.join(""))
    //      : handleOTPsubmit4Signup(pastedOtp.join(""));
  };
  const handleOnChange = async (value: string, index: number) => {
    console.log(value, "here");

    if (value === "") return;
    const copiedContent = await Clipboard.getStringAsync();
    if (copiedContent === "") return;
    const isPasted = value.includes(copiedContent);
    console.log(isPasted, "p");

    // if (isPasted) {
    //   handlePaste(value);
    // } else {
    console.log(index);

    if (value === "") {
      setCurrentInput(index - 1);
    } else {
      setCurrentInput(index + 1);
    }
    const newOTP = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
    // }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentinput]);
  return (
    <View
      className={`w-full my-5   flex-row items-center justify-start flex space-x-1`}
    >
      {otp.map((_, index) => (
        <TextInput
          key={index}
          ref={index === currentinput ? inputRef : null}
          maxLength={1}
          onChangeText={(e) => handleOnChange(e, index)}
          value={otp[index]}
          cursorColor={COLORS.scudBlue}
          keyboardType="number-pad"
          className={` text-center outline-none border rounded-[10px] py-2  px-3   ${
            outline && currentinput == index
              ? "border-scudBlue"
              : "border-bordercolor"
          }  text-base`}
          onBlur={() => {
            setOutline(false);
          }}
          onFocus={() => {
            setOutline(true), setCurrentInput(index);
          }}
        />
      ))}
    </View>
  );
};

export default OtpInput;
