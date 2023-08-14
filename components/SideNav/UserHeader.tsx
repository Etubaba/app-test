import { View as View2 } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/Theme";
import { Feather } from "@expo/vector-icons";
import Text from "../../components/common/Text";
import { useColorScheme } from "nativewind";
import { useThemeStore } from "../../features/store";
import { modes } from "../../interface";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import View from "../common/View";

const UserHeader = () => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const { setTheme, theme } = useThemeStore((state) => state);
  // console.log(theme);

  return (
    <>
      <View2 className="w-full border-b z-10 bg-scudBlue  space-x-5 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
        <View2 className="w-full mt-8 space-x-3 flex py-10  rounded-tr-[50px] border-textColor/10 flex-row items-center p-2">
          <View2 className="rounded-full  w-16 h-16 border border-white">
            <Image
              className="rounded-full  flex-1"
              source={require("../../dummy/assets/Ellipse_6.png")}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
          </View2>
          <View2 className="flex flex-row space-x-8 items-center">
            <View2 className="space-y-1">
              <Text EnableCStyle className="text-xl text-white">
                Shola Daniel
              </Text>
              <View2 className="flex flex-row space-x-1">
                <AntDesign
                  name="star"
                  size={13}
                  color={COLORS.scudDarkYellow}
                />
                <AntDesign
                  name="star"
                  size={13}
                  color={COLORS.scudDarkYellow}
                />
                <AntDesign
                  name="star"
                  size={13}
                  color={COLORS.scudDarkYellow}
                />
                <AntDesign
                  name="star"
                  size={13}
                  color={COLORS.scudDarkYellow}
                />
                <AntDesign
                  name="star"
                  size={13}
                  color={COLORS.scudDarkYellow}
                />
                <Text EnableCStyle className="text-white">
                  3.0
                </Text>
              </View2>
            </View2>
            {theme == modes.light ? (
              <TouchableOpacity
                onPress={() => setTheme(modes.dark)}
                className="flex flex-row items-baseline pt-7"
              >
                <Feather name="sun" size={24} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setTheme(modes.light)}
                className="flex flex-row items-baseline pt-7"
              >
                <Feather name="moon" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View2>
        </View2>
      </View2>
      <View
        Light
        LightColor={COLORS.scudLightBlue}
        Dark
        DarkColor="#23293B"
        className="w-full  bg-scudLightBlue px-5  h-16  flex justify-between flex-row items-center "
      >
        <Text className="text-base font-bold">Sub-drivers</Text>
        <TouchableOpacity className="rounded-xl">
          <View2 className="flex border border-scudBlue rounded-xl  flex-row space-x-3 items-center p-1 px-2">
            <AntDesign name="plus" size={18} color={COLORS.scudBlue} />

            <Text className="text-base text-scudBlue">Add</Text>
          </View2>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserHeader;
