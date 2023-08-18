import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";

const ActivateWebView = () => {
  return <WebView source={{ uri: "https://scud.io" }} />;
};

export default ActivateWebView;
