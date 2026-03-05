import { Stack } from "expo-router";

export default function PageOneLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#a855f7" },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Poppins_400Regular",
        },
      }}
    >
      <Stack.Screen
        name="PageOne"
        options={{
          title: "Welcome",
        }}
      />
    </Stack>
  );
}
