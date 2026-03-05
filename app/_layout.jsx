import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: "Poppins_400Regular" };

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: "Poppins_400Regular" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="page-one" options={{ headerShown: false }} />
    </Stack>
  );
}
