import { View, Text } from "react-native";
import React, { useMemo } from "react";

const Greetings = () => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  return (
    <View className="mt-4">
      <Text className="text-lg font-light mb-4">{greeting}, User!</Text>
      <Text className="text-3xl font-bold ">
        Learn accurate measurements for a perfect fit
      </Text>
    </View>
  );
};

export default Greetings;
