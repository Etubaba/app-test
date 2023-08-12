import { Text as Text2, StyleSheet } from "react-native";
import { TextProps } from "../../interface";

const Text: React.FC<TextProps> = ({ style, children, className }) => {
  return (
    <Text2 className={className} style={[defaultStyle.default, style]}>
      {children}
    </Text2>
  );
};
export default Text;
const defaultStyle = StyleSheet.create({
  default: {
    fontFamily: "Gilroy",
  },
});
