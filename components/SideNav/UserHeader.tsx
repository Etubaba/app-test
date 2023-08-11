import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/Theme";

const UserHeader = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <>
      <View className="w-full border-b z-10 bg-scudBlue top-0 absolute space-x-5 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
        <View className="w-full mt-8 space-x-5 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
          <View className="rounded-full ml-3  w-20 h-20 border border-white">
            <Image
              className="rounded-full  flex-1"
              source={require("../../dummy/assets/Ellipse_6.png")}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <TouchableOpacity className="space-y-1">
            <Text className="text-xl text-white">Shola Daniel</Text>
            <Text className="text-base  text-textColor">Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full bg-scudLightBlue px-7 relative h-16  flex justify-between flex-row items-center top-24">
        <Text className="text-base  font-bold">Sub-drivers</Text>
        <TouchableOpacity className="rounded-xl">
          <View className="flex border border-scudBlue rounded-xl  flex-row space-x-3 items-center p-1 px-2">
            <AntDesign name="plus" size={20} color={COLORS.scudBlue} />

            <Text className="text-base text-scudBlue">Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserHeader;
