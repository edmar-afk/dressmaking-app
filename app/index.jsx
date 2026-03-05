/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import homeBg from "../assets/images/dresses/homeBg.png";
import Svg, { Path } from "react-native-svg";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-purple-100">
      <View className="flex-1 items-center justify-center">
        <Text className="text-md mb-4 italic px-36 text-center">Dressmaking Measurement App</Text>
        <Text className="text-5xl font-bold text-center px-14">
          MeasureFit
          <Svg viewBox="0 -100 918 142" preserveAspectRatio="none">
            <Path
              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"
              fill="rgba(186,104,200,0.7)"
            />
          </Svg>
        </Text>
      </View>
      <View className="flex-1 items-center justify-end">
        <Image source={homeBg} className="w-96 h-96 -mb-5" />
      </View>

      <View className="bg-white w-full pt-12 rounded-t-3xl items-center pb-12">
        <Text className="text-3xl font-extrabold text-gray-800 text-center px-6">
          Welcome to Your Dressmaking Journey – Measure & Create!
        </Text>
        <Text className="text-lg text-center mt-4 px-8">
          Measure with care, craft with creativity, and bring your ideas to
          life, one stitch at a time.
        </Text>
        <Pressable
          onPress={() => router.push("/page-one/PageOne")}
          className="mt-12 bg-purple-500 px-24 py-5 rounded-lg mb-8"
        >
          <Text className="text-white text-lg font-semibold">
            Let's Get Started
          </Text>
        </Pressable>
        <View className="flex flex-row gap-12">
          <Text className="text-gray-600 font-semibold text-sm underline">
            REFLECTION
          </Text>
          <Text className="text-gray-600 font-semibold text-sm underline">
            KEY TAKEAWAYS
          </Text>
          <Text className="text-gray-600 font-semibold text-sm underline">
            REFERENCES
          </Text>
        </View>
      </View>
    </View>
  );
}
