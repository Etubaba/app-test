import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function DriverActionBox() {
  const inset = useSafeAreaInsets();

  return (
    <View className="border-t-[0.5px] w-full border-gray-300 flex justify-center items-center">
      <Text className="text-center font-bold text-lg">
        You’re currently online
      </Text>
    </View>
  );
}

export default DriverActionBox;
