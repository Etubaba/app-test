import { View as View2, Text } from "react-native";
import React from "react";
import { ViewProps, modes } from "../../interface";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useThemeStore } from "../../features/store";
import { MODES } from "../../constants/Theme";

const View: React.FC<ViewProps> = ({
  EnableCStyle,
  style,
  children,
  className,
  Dark,
  Light,
  LightColor,
  DarkColor,
}) => {
  const { theme } = useThemeStore((state) => state);
  const progress = useDerivedValue(() => {
    return withTiming(theme == modes.light ? 0 : 1);
  });
  const animatedStyle = {
    colorSchemes: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          progress.value,
          [0, 1],
          [
            Light
              ? typeof LightColor == "string" || LightColor == "number"
                ? LightColor
                : MODES.light.backgroundColor
              : MODES.light.backgroundColor,
            Dark
              ? typeof DarkColor == "string" || DarkColor == "number"
                ? DarkColor
                : MODES.dark.backgroundColor
              : MODES.dark.backgroundColor,
          ]
        ),
      };
    }),
  };

  return (
    <Animated.View
      className={className}
      style={EnableCStyle ? [style] : [style, animatedStyle.colorSchemes]}
    >
      {children}
    </Animated.View>
  );
};

export default View;
