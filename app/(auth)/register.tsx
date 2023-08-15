import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import { AuthContextType } from "../../interface";

const register = () => {
  const authContext = useAuth();

  return (
    <SafeAreaView>
      <View className="text-center">
        <Text onPress={() => authContext?.signIn("hi")}>Sign In</Text>
        <Text>register</Text>
      </View>
    </SafeAreaView>
  );
};

export default register;
