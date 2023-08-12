import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ArrowImage from "../assets/arrow.svg";
import { Image as SvgImage } from "expo-image";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Ctx } from "../interface";
import Text from "../components/common/Text";



const BUTTON_WIDTH = 60;
const BUTTON_HEIGHT = 165;
const BUTTON_PADDING = 18;
const SWIPEABLE_DIMENSIONS = BUTTON_WIDTH - 2 * BUTTON_PADDING;
const COLORS = {
  online: "#0333FF",
  offline: "#FF2D2D",
};

const V_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const V_SWIPE_RANGE = BUTTON_HEIGHT - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

function DriverActionButton() {
  const Y = useSharedValue<number>(0);
  const [toggled, setToggled] = useState<Boolean>(true);

  const animateGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: Ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx: Ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = V_SWIPE_RANGE + e.translationY;
      } else {
        newValue = e.translationY;
      }
      if (newValue >= 0 && newValue <= V_SWIPE_RANGE + 10) {
        Y.value = newValue;
      }
    },
    onEnd: () => {
      if (Y.value < BUTTON_HEIGHT / 2) {
        Y.value = withSpring(0);
        runOnJS(setToggled)(false);
      } else if (Y.value > BUTTON_HEIGHT / 2) {
        Y.value = withSpring(0);
        runOnJS(setToggled)(true);
      } else {
        Y.value = withSpring(0);
      }
    },
  });
  const interpolateYInput = [0, V_SWIPE_RANGE];
  const progress = useDerivedValue(() => {
    return withTiming(toggled ? 0 : 1);
  });
  const animatedStyle = {
    swipeable: useAnimatedStyle(() => {
      return { transform: [{ translateY: Y.value }] };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          Y.value,
          interpolateYInput,
          [0.9, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateY: interpolate(
              Y.value,
              interpolateYInput,
              [0, BUTTON_HEIGHT / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),

    colorWave: useAnimatedStyle(() => {
      return {
        opacity: interpolate(Y.value, interpolateYInput, [10, 1]),
      };
    }),

    bgColor: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          progress.value,
          [0, 1],
          [COLORS.online, COLORS.offline]
        ),
      };
    }),
  };
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Animated.View
        style={[styles.swipeCont, animatedStyle.bgColor]}
        className={`  space-y-5 flex items-center transition-opacity  justify-center rounded-lg `}
      >
        <PanGestureHandler onGestureEvent={animateGestureHandler}>
          <Animated.View
            style={[animatedStyle.swipeable, styles.swipeable]}
            className={` flex items-center `}
          >
            {toggled ? (
              <SvgImage
                source={ArrowImage}
                accessible={true}
                className="w-7 h-7 rotate-180 relative top-28"
                contentFit="contain"
                transition={1000}
              />
            ) : (
              <SvgImage
                source={ArrowImage}
                accessible={true}
                className="w-7 h-7 relative -top-3"
                contentFit="contain"
                transition={1000}
              />
            )}
          </Animated.View>
        </PanGestureHandler>
        {toggled ? (
          <Animated.View
            style={[animatedStyle.swipeText]}
            className={
              "space-y-3 transition-all flex flex-col relative -top-4  items-center"
            }
          >
            <Text className=" text-lg -rotate-90  text-white">Online</Text>
            <Text className="  text-lg -rotate-90 w-full text-white">Go</Text>
          </Animated.View>
        ) : (
          <Animated.View
            style={[animatedStyle.swipeText]}
            className={"space-y-3 flex flex-col items-center"}
          >
            <Text className="  text-lg rotate-90 w-full text-white">Go</Text>
            <Text className=" text-lg rotate-90  text-white">Offline</Text>
          </Animated.View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  swipeCont: {
    height: Platform.OS == "ios" ? BUTTON_HEIGHT - 3 : BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    position: "relative",
  },
  swipeable: {
    position: "absolute",
    top: BUTTON_PADDING - 4,
    width: "100%",
    height: 130,
    zIndex: 3,
    padding: 3,
  },
});
export default DriverActionButton;
