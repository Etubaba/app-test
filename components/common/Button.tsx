import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "../../interface";

const Button = ({
  children,
  className,
  style,
  onPress,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={disabled ? () => {} : onPress}
      style={[style]}
      className={`${disabled ? "bg-scudBlue/30" : "bg-scudBlue"} ` + className}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
