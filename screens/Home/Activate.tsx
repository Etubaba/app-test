import { View } from "react-native";
import React from "react";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import { Image } from "expo-image";
import CheckIcon from "../../assets/icons/bi_check-circle.svg";
import RedIcon from "../../assets/icons/redIcon.svg";
import BlueIcon from "../../assets/icons/BlueIcon.svg";
import YellowIcon from "../../assets/icons/YellowIcon.svg";
import GreenIcon from "../../assets/icons/GreenIcon.svg";
import { router } from "expo-router";

const Activate = () => {
  return (
    <View className="flex-1 p-5">
      <View className="space-y-12">
        <View className="flex flex-col space-y-3 items-center">
          <Image
            source={CheckIcon}
            accessible={true}
            className="w-16 h-16 "
            contentFit="cover"
            transition={1000}
          />
          <Text
            EnableCStyle
            className="font-bold text-2xl text-scudDarkMode text-center"
          >
            Awesome! Your Number {"\n"} Has Been Verified
          </Text>
          <Text className=" text-textColor text-base  text-center">
            Click on the "Activate my account" button to upload the following
            requirements to start earning while you drive with us!
          </Text>
        </View>
        <View className="space-y-4">
          <View className="flex rounded-lg border bg-white border-bordercolor shadow-lg p-3 flex-row space-x-3">
            <View>
              <Image
                source={RedIcon}
                accessible={true}
                className="w-14 h-14 "
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View>
              <Text EnableCStyle className=" text-lg text-scudDarkMode ">
                Your Personal Information
              </Text>
              <Text className=" text-textColor  ">
                We need some details about our drivers
              </Text>
            </View>
          </View>
          <View className="flex rounded-lg border bg-white border-bordercolor shadow-lg p-3 flex-row space-x-3">
            <View>
              <Image
                source={BlueIcon}
                accessible={true}
                className="w-14 h-14 "
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View>
              <Text EnableCStyle className=" text-lg text-scudDarkMode ">
                Vehicle Details
              </Text>
              <Text className=" text-textColor  ">
                Upload your vehicle number and details
              </Text>
            </View>
          </View>
          <View className="flex rounded-lg border bg-white border-bordercolor shadow-lg p-3 flex-row space-x-3">
            <View>
              <Image
                source={YellowIcon}
                accessible={true}
                className="w-14 h-14 "
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View>
              <Text EnableCStyle className=" text-lg text-scudDarkMode ">
                Driver’s License
              </Text>
              <Text className=" text-textColor  ">
                Upload your driver’s license and details
              </Text>
            </View>
          </View>
          <View className="flex rounded-lg border bg-white border-bordercolor shadow-lg p-3 flex-row space-x-3">
            <View>
              <Image
                source={GreenIcon}
                accessible={true}
                className="w-14 h-14 "
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View>
              <Text EnableCStyle className=" text-lg text-scudDarkMode ">
                Bank Account
              </Text>
              <Text className=" text-textColor">
                Provide us your active bank account
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="justify-end flex-1">
        <Button
          className="px-[20px]  py-[15px]  rounded-[10px]"
          onPress={() => {
            router.push("/(drawer)/activate/activate_webview");
          }}
        >
          <Text EnableCStyle className="text-center text-white">
            Activate my account
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Activate;
