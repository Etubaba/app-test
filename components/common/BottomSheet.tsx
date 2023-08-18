import { View, Dimensions, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";
import React, { useEffect, useCallback } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { BottomsheetType } from "../../interface";

const screenHeight = Dimensions.get("window").height;
const MAX_TRANSLATE_Y = -screenHeight + 50;

const BottomSheet = ({ children, onClose, open }: BottomsheetType) => {
  if (!open) return;
  const AnimatedView = Animated.View;

  const offsetY = useSharedValue(0);

  const savedOffset = useSharedValue({ y: 0 });

  const scrollTo = useCallback((destination: number) => {
    "worklet";
    offsetY.value = withSpring(destination, { damping: 50 });
  }, []);

  const dragGesture = Gesture.Pan()
    .onStart(() => {
      savedOffset.value = { y: offsetY.value };
    })
    .onUpdate((e) => {
      // offsetY.value = e.translationY + savedOffset.value;
      offsetY.value = e.translationY + savedOffset.value.y;
      offsetY.value = Math.max(offsetY.value, MAX_TRANSLATE_Y);
    })
    .onEnd((e) => {
      if (offsetY.value > -screenHeight / 3) {
        scrollTo(0);
      } else if (offsetY.value < -screenHeight / 2) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    })
    .onFinalize(() => {});

  useEffect(() => {
    scrollTo(-screenHeight / 3);
  }, []);

  const animatedSheet = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      offsetY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [20, 5],
      Extrapolation.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: offsetY.value }],
    };
  });

  return (
    <>
      <AnimatedView
        pointerEvents="none"
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        ]}
      />
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
    </>
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
    top: screenHeight / 1.5,
    height: screenHeight,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
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
    height: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
});
