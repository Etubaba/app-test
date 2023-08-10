import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvilIcons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image as SvgImage } from "expo-image";
import PromoImage from "../assets/promo.svg";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import DriverActionButton from "../components/DriverActionButton";
import { useScudStore } from "../features/store";

export default function Home() {
  const ScudStore = useScudStore((state) => state);

  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <StatusBar style="auto" />
        <MapView provider={PROVIDER_GOOGLE} style={styles.map}></MapView>
        <TouchableOpacity
          onPress={() => ScudStore?.DrawerProps?.navigation.openDrawer()}
          activeOpacity={0.6}
          className="rounded-full absolute top-16 left-5 bg-white w-12 h-12 p-2 shadow-lg flex items-center justify-center"
        >
          <EvilIcons name="navicon" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          className="rounded-full absolute top-16 right-5 bg-white w-12 h-12 shadow-lg p-2 flex items-center justify-center"
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
          className="rounded-full absolute top-[58%] right-5 bg-white w-12 h-12 shadow-lg p-2 flex items-center justify-center"
        >
          <MaterialIcons name="my-location" size={26} color="black" />
        </TouchableOpacity>
        <View className="absolute bottom-0  text-[50px] w-full  bg-white h-72">
          <SvgImage
            source={PromoImage}
            accessible={true}
            className="w-full h-16 "
            contentFit="cover"
            transition={1000}
          />
          <View className="border-t-[0.5px] border-gray-300 p-2 mb-10">
            {/* <DriverActionBox /> */}

            <Text className="text-center font-bold text-lg">
              You’re currently offline
            </Text>
            <View className="flex-row justify-between space-x-2 pt-2 w-full h-[85%] ">
              <View className="w-36 space-y-2">
                <TouchableOpacity className="rounded-md shadow-lg border-[0.3px] bg-white flex justify-between  p-3 border-gray-100 h-20">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400 text-[12px]">
                      Today’s Earnings
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-black font-bold  text-[18px]">
                      ₦2,389
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-md shadow-lg border-[0.3px] bg-white flex w-full justify-between  p-3 border-gray-100 h-20">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400 text-[12px]">
                      Time Online
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-black font-bold  text-[18px]">
                      00hr:50min
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <DriverActionButton />
              <View className="w-36 space-y-2">
                <TouchableOpacity className="rounded-md shadow-lg border-[0.3px] bg-white flex justify-between  p-3 border-gray-100 h-20">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400 text-[12px]">
                      Accepatance Rate
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-black font-bold  text-[18px]">
                      95.5%
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-md shadow-lg border-[0.3px] bg-white flex justify-between  p-3 border-gray-100 h-20">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400 text-[12px]">
                      Cancellation Rate
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={15}
                      color="gray"
                    />
                  </View>
                  <View className="flex-row justify-between items-center">
                    <Text className="text-black font-bold  text-[18px]">
                      10.5%
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
