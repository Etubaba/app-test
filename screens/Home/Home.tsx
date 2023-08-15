import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View as View2,
  Dimensions,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image as SvgImage } from "expo-image";
import PromoImage from "../../assets/promo.svg";
import TimerIcon from "../../assets/ic_outline-timer.svg";
import Text from "../../components/common/Text";

import DriverActionButton from "../../components/DriverActionButton";
import { useScudStore, useThemeStore } from "../../features/store";
import React from "react";
import { withTiming } from "react-native-reanimated";
import { COLORS } from "../../constants/Theme";
import View from "../../components/common/View";
import { modes } from "../../interface";

export default function Home() {
  const ScudStore = useScudStore((state) => state);
  const DeviceHeight = Dimensions.get("window").height;
  const { theme } = useThemeStore((state) => state);
  // console.log(DeviceHeight);

  return (
    <View2 className="flex-1  items-center justify-center ">
      <StatusBar style="auto" backgroundColor="#ffffff00" />
      <MapView  provider={PROVIDER_GOOGLE} style={styles.map}></MapView>
      <TouchableOpacity
        onPress={() => ScudStore?.DrawerProps?.navigation.openDrawer()}
        activeOpacity={0.6}
        className="rounded-full absolute top-[6%] left-5 bg-white w-12 h-12 p-2 shadow-lg flex items-center justify-center"
      >
        <EvilIcons name="navicon" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        className="rounded-full absolute top-[6%] right-5 bg-white w-12 h-12 shadow-lg p-2 flex items-center justify-center"
      >
        <Ionicons
          className="text-bold"
          name="pin-outline"
          size={26}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        className={
          DeviceHeight <= 736
            ? "rounded-full absolute right-5 bg-white top-[52%] w-12 h-12 shadow-lg p-2 flex items-center justify-center"
            : "rounded-full absolute right-5 bg-white top-[58%] w-12 h-12 shadow-lg p-2 flex items-center justify-center"
        }
      >
        <MaterialIcons name="my-location" size={26} color="black" />
      </TouchableOpacity>
      <View className="absolute bottom-0  text-[50px] w-full  bg-white h-[35%]">
        <SvgImage
          source={PromoImage}
          accessible={true}
          className="w-full h-16 "
          contentFit="cover"
          transition={1000}
        />
        <View className="border-t-[0.5px] border-gray-300 p-2 mb-10">
          {/* <DriverActionBox /> */}

          <Text className="text-center  font-bold text-lg">
            You’re currently offline
          </Text>
          <View className="flex-row justify-between  items-center  pt-2 w-full h-[85%] ">
            <View
              className={
                Platform.OS == "android" ? "w-36 space-y-2" : "w-40 space-y-2"
              }
            >
              <TouchableOpacity>
                <View
                  Dark
                  DarkColor="#23293B"
                  className={
                    theme == modes.light
                      ? "rounded-md shadow-lg border-[0.3px] p-3  flex justify-between   border-gray-100 h-20"
                      : "rounded-md shadow-lg border-[0.2px] p-3  flex justify-between   border-gray-700 h-20"
                  }
                >
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <Text
                      Light
                      LightColor={COLORS.textColor}
                      className="text-gray-400 text-[12px]"
                    >
                      Today’s Earnings
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <Text className="text-black font-bold  text-[18px]">
                      ₦2,389
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View
                  Dark
                  DarkColor="#23293B"
                  className={
                    theme == modes.light
                      ? "rounded-md shadow-lg border-[0.3px] p-3  flex justify-between   border-gray-100 h-20"
                      : "rounded-md shadow-lg border-[0.2px] p-3  flex justify-between   border-gray-700 h-20"
                  }
                >
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <SvgImage
                      source={TimerIcon}
                      accessible={true}
                      className="w-5 h-5 "
                      contentFit="contain"
                      transition={1000}
                    />
                    <Text
                      Light
                      LightColor={COLORS.textColor}
                      className="text-gray-400 text-[12px]"
                    >
                      Time Online
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <Text className="text-black font-bold  text-[18px]">
                      00hr:50min
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <DriverActionButton />
            <View
              className={
                Platform.OS == "android" ? "w-36 space-y-2" : "w-40 space-y-2"
              }
            >
              <TouchableOpacity>
                <View
                  Dark
                  DarkColor="#23293B"
                  className={
                    theme == modes.light
                      ? "rounded-md shadow-lg border-[0.3px] p-3  flex justify-between   border-gray-100 h-20"
                      : "rounded-md shadow-lg border-[0.2px] p-3  flex justify-between   border-gray-700 h-20"
                  }
                >
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row rounded-md justify-between items-center "
                  >
                    <Text
                      Light
                      LightColor={COLORS.textColor}
                      className="text-gray-400 text-[12px]"
                    >
                      Accepatance Rate
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row rounded-md  justify-between  items-center"
                  >
                    <Text className="text-black  font-bold  text-[18px]">
                      95.5%
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  Dark
                  DarkColor="#23293B"
                  className={
                    theme == modes.light
                      ? "rounded-md shadow-lg border-[0.3px] p-3  flex justify-between   border-gray-100 h-20"
                      : "rounded-md shadow-lg border-[0.2px] p-3  flex justify-between   border-gray-700 h-20"
                  }
                >
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <Text
                      Light
                      LightColor={COLORS.textColor}
                      className="text-gray-400 text-[12px]"
                    >
                      Cancellation Rate
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View
                    Dark
                    DarkColor="#23293B"
                    className="flex-row justify-between items-center"
                  >
                    <Text
                      EnableCStyle
                      className="text-red-500 font-bold  text-[18px]"
                    >
                      10.5%
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View2>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "Gilroy",
  },
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
