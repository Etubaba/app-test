import Home from "../screens/Home/Home";
import {
  Redirect,
  SplashScreen,
  Stack,
  useRootNavigationState,
} from "expo-router";

const Unmatched = () => {
  const rootNavigationState = useRootNavigationState();
  if (rootNavigationState?.key) {
    SplashScreen.hideAsync();
    return <Redirect href={"/(drawer)/home"} />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Home />
    </>
  );
};

export default Unmatched;
