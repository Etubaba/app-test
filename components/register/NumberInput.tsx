import { Image } from "expo-image";
import React, { useState } from "react";
import { TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { COLORS } from "../../constants/Theme";
import { useForm, Controller, Control } from "react-hook-form";
import { useFormProps } from "../../interface";
import Text from "../common/Text";
const NumberInput = ({ control, error }: useFormProps) => {
  const [countryCode, setCountryCode] = useState("ng");
  const [outline, setOutline] = useState(false);
  console.log(error);

  return (
    <>
      <View
        className={`w-full mt-5 mb-3  rounded-[10px] flex-row items-center justify-start py-2  border ${
          outline
            ? "border-scudBlue"
            : error?.phoneNumber
            ? "border-scudRed"
            : "border-bordercolor"
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
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ paddingBottom: Platform.OS == "ios" ? 8 : 0 }}
              spellCheck={false}
              autoCorrect={false}
              autoComplete="off"
              placeholder="Phone Number"
              onChangeText={onChange}
              value={value}
              returnKeyType="done"
              cursorColor={COLORS.scudBlue}
              keyboardType="phone-pad"
              className="w-full outline-none    text-base"
              onBlur={() => setOutline(false)}
              onFocus={() => setOutline(true)}
            />
          )}
          name="phoneNumber"
        />
      </View>
      {error?.phoneNumber && (
        <View className="flex mb-4 flex-row rounded-lg w-full bg-scudRed/5 py-2  items-center  justify-center space-x-2  ">
          <MaterialIcons name="error-outline" size={17} color="red" />
          <Text EnableCStyle className="text-scudRed">
            Enter a valid phone number
          </Text>
        </View>
      )}
    </>
  );
};

export default NumberInput;
