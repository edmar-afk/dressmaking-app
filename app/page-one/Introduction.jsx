import { View, Text, Image } from "react-native";
import React from "react";

const Introduction = () => {
  return (
    <View className="mt-12">
      <Text className="text-2xl font-semibold">
        Introduction to Dressmaking
      </Text>

      <Text className="text-lg text-gray-600 mt-3 leading-7">
        Dressmaking is the art and skill of designing and creating garments. In
        this application, students will learn the basic principles of
        dressmaking step by step. The lessons will guide you through the
        important foundations needed to create well-fitted clothing.
      </Text>

      <Text className="text-lg text-gray-600 leading-7">
        You will learn how to properly take body measurements, understand
        essential dressmaking tools and materials, and create basic patterns
        used in garment construction. These skills are important in ensuring
        that clothes fit comfortably and are accurately made.
      </Text>

      <Text className="text-lg text-gray-600 mt-3 leading-7">
        The Application will also teach the correct procedures for measuring and
        following the steps in measurements by following the instructions
        provided. Students can practice and develop their confidence in
        dressmaking while improving their creativity and technical skills.
      </Text>

      <Text className="text-2xl font-semibold mt-8 leading-7">Objectives</Text>
      <Text className="text-lg text-gray-600 mt-3 leading-7">
        1. Identify the common dressmaking measuring tools and their uses in
        taking body measurements.
      </Text>
      <Text className="text-lg text-gray-600 leading-7">
        2. Perform precise measurements using the proper dressmaking measuring
        tools.
      </Text>
      <Text className="text-lg text-gray-600 leading-7">
        3. Show patience, care and attention to detail while taking measurements
        to ensure client comfort and measurement accuracy
      </Text>
    </View>
  );
};

export default Introduction;
