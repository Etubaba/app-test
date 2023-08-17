import { View, Text, Dimensions, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const screenHeight = Dimensions.get("window").height;
const sheetMaxHeight = screenHeight - 200;
const sheetMinHeight = 200;

const MAX_Y = sheetMinHeight - sheetMaxHeight;
const MID_Y = MAX_Y / 2;
const MIN_Y = 0;

const MIN_THRESHOLD = 40;

const BottomSheet = ({ children }: { children: React.JSX.Element }) => {
  const AnimatedView = Animated.createAnimatedComponent(View);

  const offsetY = useSharedValue(0);
  const savedOffset = useSharedValue(0);

  const dragGesture = Gesture.Pan()
    .onUpdate((e) => {
      offsetY.value = e.translationY + savedOffset.value;
    })
    .onEnd((e) => {
      savedOffset.value = offsetY.value;
      // if (e.translationY < 0) {
      //   //dragging up
      //   if (e.translationY > -MIN_THRESHOLD) {
      //     offsetY.value = savedOffset.value === MIN_Y ? MIN_Y : MID_Y;
      //     savedOffset.value = savedOffset.value === MIN_Y ? MIN_Y : MID_Y;
      //   } else if (
      //     e.translationY < MID_Y + MIN_THRESHOLD &&
      //     savedOffset.value === MIN_Y
      //   ) {
      //     offsetY.value = MAX_Y;
      //     savedOffset.value = MAX_Y;
      //   } else {
      //     offsetY.value = savedOffset.value === MIN_Y ? MID_Y : MAX_Y;
      //     savedOffset.value = savedOffset.value === MIN_Y ? MID_Y : MAX_Y;
      //   }
      // } else {
      //   //dragging down
      //   if (e.translationY < MIN_THRESHOLD) {
      //     offsetY.value = savedOffset.value === MAX_Y ? MAX_Y : MID_Y;
      //     savedOffset.value = savedOffset.value === MAX_Y ? MAX_Y : MID_Y;
      //   } else if (
      //     e.translationY > -MID_Y + MIN_THRESHOLD &&
      //     savedOffset.value === MAX_Y
      //   ) {
      //     offsetY.value = MIN_Y;
      //     savedOffset.value = MIN_Y;
      //   } else {
      //     offsetY.value = savedOffset.value === MAX_Y ? MID_Y : MIN_Y;
      //     savedOffset.value = savedOffset.value === MAX_Y ? MID_Y : MIN_Y;
      //   }
      // }
      // if (offsetY.value <= MIN_Y) {
      //   savedOffset.value = offsetY.value;
      // } else {
      //   savedOffset.value = 0;
      // }
    })
    .onFinalize(() => {});

  const animatedSheet = useAnimatedStyle(() => {
    const animatedHeight = interpolate(
      offsetY.value,
      [MAX_Y, MIN_Y],
      [sheetMaxHeight, sheetMinHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
        extrapolateLeft: Extrapolation.CLAMP,
      }
    );
    return {
      height: withSpring(animatedHeight, {
        damping: 16,
        stiffness: 100,
        mass: 0.3,
      }),
    };
  });

  return (
    <GestureHandlerRootView>
      <AnimatedView style={[styles.sheetContainer, animatedSheet]}>
        <GestureDetector gesture={dragGesture}>
          <View className="w-full border-b border-bordercolor justify-center flex items-center rounded-tr-[20px] rounded-tl-[20px] h-10">
            <View className="bg-gray-600 h-1.5 w-20  rounded-xl"></View>
          </View>
        </GestureDetector>
        <View className="p-2">{children}</View>
      </AnimatedView>
    </GestureHandlerRootView>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContainer: {
    backgroundColor: "#64748B",
    position: "absolute",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    height: 200,
  },
  dragbarContainer: {
    width: "100%",
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    elevation: 2,
    backgroundColor: "#E1BEE7",
  },
  dragBar: {
    width: 80,
    height: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
});
