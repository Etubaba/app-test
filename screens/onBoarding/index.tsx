import {
  View,
  Text,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  ListRenderItem,
  StatusBar,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
import { OnBoardingItem } from "../../interface";
import Button from "../../components/common/Button";
import { useOnBoardingStore } from "../../features/store";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/onBoardingBG.png"),
    title: "Welcome to Scud",
    subtitle:
      "Easy way to earn N35000 weekly while driving with just a few steps",
  },
  {
    id: "2",
    image: require("../../assets/onBoardingBG.png"),
    title: "OTP Verification",
    subtitle: "Easy way to make N35000 weekly while driving with us",
  },
  {
    id: "3",
    image: require("../../assets/onBoardingBG.png"),
    title: "Upload Document",
    subtitle: "Easy way to make N35000 weekly while driving with us",
  },
];
let SkipFunction: () => void;

const Slide: ListRenderItem<OnBoardingItem> = ({ item, index }) => {
  return (
    <View
      className={`flex-1 w-full h-full bg-black pt-10 items-center relative justify-center`}
    >
      {index == 0 && (
        <View className="bg-transparent absolute right-0 pr-5  top-16 z-10">
          <TouchableOpacity
            onPress={SkipFunction}
            className="flex flex-row items-center "
          >
            <MaterialIcons
              name="keyboard-arrow-right"
              size={15}
              color="white"
            />
            <MaterialIcons
              name="keyboard-arrow-right"
              size={15}
              color="white"
            />
            <Text className="text-white">Skip</Text>
          </TouchableOpacity>
        </View>
      )}
      <Image
        contentFit="cover"
        source={item.image}
        style={{ height: "100%", width: width }}
      />
    </View>
  );
};
const OnBoarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef<FlatList<OnBoardingItem> | null>(null);
  const { setIsFirstTimeLoad } = useOnBoardingStore((state) => state);

  const updateCurrentSlideIndex = (e: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current!.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current!.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  SkipFunction = skip;

  const handleGoToRegister = () => {
    setIsFirstTimeLoad(false);
    router.push("/register");
  };

  const Footer = () => {
    return (
      <View
        className={`h-full rounded-t-[13px] space-y-2 absolute px-5 top-[98%] bg-white  w-full`}
      >
        <View className="p-5 flex flex-col space-y-3 items-center">
          <Text className="font-bold text-xl text-scudDarkMode">
            {slides[currentSlideIndex].title}
          </Text>
          <Text className=" text-base text-center text-textColor">
            {slides[currentSlideIndex].subtitle}
          </Text>
        </View>
        <View className={` w-full `}>
          {currentSlideIndex == slides.length - 1 ? (
            <>
              <Button
                onPress={handleGoToRegister}
                className={`px-[20px] items-center justify-center flex flex-row py-[15px] rounded-lg `}
              >
                <Text className="text-white">Sign up now</Text>
              </Button>
            </>
          ) : (
            <>
              <Button
                onPress={goToNextSlide}
                className={`px-[20px] items-center justify-center flex flex-row py-[15px] rounded-lg `}
              >
                <Text className="text-white">Continue</Text>
              </Button>
            </>
          )}
          <View className={`flex-row  justify-center pt-5`}>
            {slides.map((_, index) => (
              <View
                key={index}
                className={
                  currentSlideIndex == index
                    ? `bg-scudBlue h-2 rounded-full w-4 mr-2`
                    : ` h-2 bg-gray-300 rounded-full w-2 mr-2`
                }
              ></View>
            ))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="bg-black">
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="black"
      />
      <FlatList
        className=""
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        keyExtractor={(item) => item.id}
        pagingEnabled
        renderItem={Slide}
      />
      <Footer />
    </View>
  );
};

export default OnBoarding;
