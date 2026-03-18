import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { Text, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import logo from "../assets/images/logo.png";
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
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = [
    Text.defaultProps.style,
    { fontFamily: "Poppins_400Regular" },
  ];

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: { fontFamily: "Poppins_400Regular" },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="PageOne"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Welcome to MeasureFit
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PageTwo"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Learning Content
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="PageThree"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Career opportunities
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Lesson"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Lessons
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Guide"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Measurement Guide
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Record"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Measurement Recording Chart
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Converter"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Measurement Calculator
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Tutorial"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Dress making Tutorials
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Quiz"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Quiz Challenge
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="MultipleChoice"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Multiple Choice Challenge
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Identification"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Identification Challenge
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="TrueOrFalse"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#a855f7" },
          headerTintColor: "#fff",
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                True or False Challenge
              </Text>
              <Image
                source={logo}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
