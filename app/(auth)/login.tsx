import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import { router } from "expo-router";

const login = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="#ffffff00" />
      <Drawer.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <View>
        <Text>login</Text>
        <Text onPress={() => router.back()}>Back</Text>
      </View>
    </SafeAreaView>
  );
};

export default login;
