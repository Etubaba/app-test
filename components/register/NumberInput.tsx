import { Image } from "expo-image";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const NumberInput = () => {
  const [countryCode, setCountryCode] = useState("ng");
  const [outline, setOutline] = useState(false);

  return (
    <View
      className={`w-full my-5  rounded-[10px] flex-row items-center justify-start py-2  border ${
        outline ? "border-scudBlue" : "border-bordercolor"
      } px-3 flex space-x-1`}
    >
      <TouchableOpacity onPress={() => router.push("/register/modal")}>
        <View className="flex flex-row space-x-1 items-center">
          <Image
            contentFit="cover"
            source={`https://raw.githubusercontent.com/TuleSimon/xMaterialccp/master/xmaterialccp/src/main/res/drawable/${countryCode.toLowerCase()}.png`}
            style={{ height: 16, width: 21 }}
          />
          <MaterialIcons
            className="text-textColor"
            name="keyboard-arrow-down"
            size={24}
            color={"#55575F"}
          />
        </View>
      </TouchableOpacity>

      <TextInput
        keyboardType="number-pad"
        className="w-full outline-none  c text-base"
        onBlur={() => setOutline(false)}
        onFocus={() => setOutline(true)}
        onChangeText={(value) => console.log(value)}
      />
    </View>
  );
};

export default NumberInput;
