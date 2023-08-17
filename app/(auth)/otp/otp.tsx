import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack, router } from "expo-router";
import { COLORS } from "../../../constants/Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import OtpComponent from "../../../components/otp/OtpComponent";
const otp = () => {
  const image = {
    uri: "../../../../../assets/Object.png",
  };

  return (
    <SafeAreaView className="bg-scudBlue h-full">
      <StatusBar style="auto" backgroundColor={COLORS.scudBlue} />
      <View className=" bg-white">
        <Stack.Screen
          options={{
            headerShown: false,
            // header({ options, navigation, route, back }) {
            //   return (
            //     <View className="w-full     h-[272] rounded-b-[30px]   flex-col bg-scudBlue flex   items-center">
            //       <ImageBackground
            //         className="w-full h-[80%]"
            //         source={require("../../../assets/Object.png")}
            //       >
            //         <View className="w-full  h-[60%] flex-row items-center px-5">
            //           {back && (
            //             <TouchableOpacity onPress={() => navigation.goBack()}>
            //               <MaterialIcons
            //                 name="keyboard-arrow-left"
            //                 size={30}
            //                 color="white"
            //               />
            //             </TouchableOpacity>
            //           )}
            //         </View>
            //       </ImageBackground>
            //     </View>
            //   );
            // },
          }}
        />
        <View className="w-full  h-[272] rounded-b-[30px]   flex-col bg-scudBlue flex   items-center">
          <ImageBackground
            className="w-full h-[80%]"
            source={require("../../../assets/Object.png")}
          >
            <View className="w-full  h-[60%] flex-row items-center px-5">
              <TouchableOpacity onPress={() => router.back()}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      <OtpComponent />
    </SafeAreaView>
  );
};

export default otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
