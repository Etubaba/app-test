import { Image } from "expo-image";
import React, { useState } from "react";
import { TextInput, View, KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { COLORS } from "../../constants/Theme";

const NumberInput = () => {
  const [countryCode, setCountryCode] = useState("ng");
  const [outline, setOutline] = useState(false);

  return (
    // <KeyboardAvoidingView behavior={"padding"}>
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
          <Link href="/(auth)/register/modal">
            <MaterialIcons
              className="text-textColor"
              name="keyboard-arrow-down"
              size={24}
              color={"#55575F"}
            />
          </Link>
        </View>
      </TouchableOpacity>

      <TextInput
        returnKeyType="done"
        cursorColor={COLORS.scudBlue}
        keyboardType="number-pad"
        className="w-full outline-none    text-base"
        onBlur={() => setOutline(false)}
        onFocus={() => setOutline(true)}
        onChangeText={(value) => console.log(value)}
      />
    </View>
    // </KeyboardAvoidingView>
  );
};

export default NumberInput;
