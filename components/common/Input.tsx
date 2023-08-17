import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants/Theme";

const Input = ({ onChangeText }: { onChangeText: any }) => {
  const [outline, setOutline] = useState(false);
  return (
    <View
      className={`w-full my-5  rounded-[10px] flex-row items-center justify-start py-2  border ${
        outline ? "border-scudBlue" : "border-bordercolor"
      } px-3 flex space-x-1`}
    >
      <TextInput
        cursorColor={COLORS.scudBlue}
        className="w-full outline-none    text-base"
        onBlur={() => setOutline(false)}
        onFocus={() => setOutline(true)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
