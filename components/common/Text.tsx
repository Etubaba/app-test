import { Text as Text2, StyleSheet } from "react-native";
import { TextProps, modes } from "../../interface";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { useThemeStore } from "../../features/store";
import { MODES } from "../../constants/Theme";

const Text: React.FC<TextProps> = ({
  EnableCStyle,
  style,
  children,
  className,
  Dark,
  Light,
  LightColor,
  DarkColor,
  onPress,
}) => {
  const { theme } = useThemeStore((state) => state);
  const progress = useDerivedValue(() => {
    return withTiming(theme == modes.light ? 0 : 1);
  });
  const animatedStyle = {
    colorSchemes: useAnimatedStyle(() => {
      return {
        color: interpolateColor(
          progress.value,
          [0, 1],
          [
            Light
              ? typeof LightColor == "string" || LightColor == "number"
                ? LightColor
                : MODES.light.color
              : MODES.light.color,
            Dark
              ? typeof DarkColor == "string" || DarkColor == "number"
                ? DarkColor
                : MODES.dark.color
              : MODES.dark.color,
          ]
        ),
      };
    }),
  };

  return (
    <Animated.Text
      onPress={onPress}
      className={className}
      style={
        EnableCStyle
          ? [defaultStyle.default, style]
          : [defaultStyle.default, style, animatedStyle.colorSchemes]
      }
    >
      {children}
    </Animated.Text>
  );
};
export default Text;
const defaultStyle = StyleSheet.create({
  default: {
    fontFamily: "Gilroy",
  },
});
