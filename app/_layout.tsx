import { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontsError] = useFonts({
    InterBold: require("../assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("../assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("../assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("../assets/fonts/Inter-Regular.ttf"),
    InterLight: require("../assets/fonts/Inter-Light.ttf"),
  });

  useEffect(() => {
    if (fontsError) throw new Error("Error loading fonts");
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default RootLayout;
