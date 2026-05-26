import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import BadgeCard from "./BadgeCard";

const Badges = () => {
  return (
    <View className="px-4">
      <View className="mt-8 flex-row items-center">
        <Feather name="award" size={28} color="purple" className="mr-2" />
        <Text className="text-2xl font-bold">Badges and Achievements</Text>
      </View>
      <Text className="mt-2 text-gray-600 text-lg text-justify">
        Track your progress in dressmaking quizzes, lessons, records, guides,
        and tutorials and unlock Achievements and Badges throughout the course.
      </Text>

      <BadgeCard />
    </View>
  );
};

export default Badges;
