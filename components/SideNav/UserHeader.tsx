import { View} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/Theme";
import { Feather } from "@expo/vector-icons";
import Text from "../../components/common/Text";


const UserHeader = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <>
      <View className="w-full border-b z-10 bg-scudBlue  space-x-5 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
        <View className="w-full mt-8 space-x-3 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
          <View className="rounded-full  w-20 h-20 border border-white">
            <Image
              className="rounded-full  flex-1"
              source={require("../../dummy/assets/Ellipse_6.png")}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View className="flex flex-row space-x-8 items-center">
            <View className="space-y-1">
              <Text className="text-xl text-white">Shola Daniel</Text>
              <Text className="text-base  text-textColor">Edit Profile</Text>
            </View>
            <TouchableOpacity className="flex flex-row items-baseline pt-6">
              <Feather name="sun" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="w-full bg-scudLightBlue px-5  h-16  flex justify-between flex-row items-center ">
        <Text className="text-base font-bold">Sub-drivers</Text>
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
