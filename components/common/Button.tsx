import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "../../interface";

const Button = ({ children, className, style, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
      onPress={onPress}
      style={[style]}
      className={
        "bg-scudBlue " +
        className
      }
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
