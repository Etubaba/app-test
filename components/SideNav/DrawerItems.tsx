import { View, Text, TouchableNativeFeedback } from "react-native";
import React, { useState } from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { Image as IconImage } from "expo-image";
import { DrawerItemsprops } from "../../interface";
import { PlatformPressable } from "@react-navigation/elements";

const DrawerItems = ({ label, onPress, icon }: DrawerItemsprops) => {
  const [rippleOverflow, setRippleOverflow] = useState<boolean>(false);

  return (
    <PlatformPressable onPress={onPress}>
      <View className="w-full space-x-5 flex my-1.5 ml-4 flex-row items-center p-2">
        <IconImage
          source={icon}
          accessible={true}
          className="w-5 h-5  "
          contentFit="contain"
          transition={1000}
        />

        <Text className="text-base text-textColor">{label}</Text>
      </View>
    </PlatformPressable>
  );
};

export default DrawerItems;
