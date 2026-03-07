import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import lessonsIcon from "../assets/images/navigations/lessons.png";
import guideIcon from "../assets/images/navigations/measurement.png";
import recordIcon from "../assets/images/navigations/record.png";
import tutorialIcon from "../assets/images/navigations/tutorial.png";
import quizIcon from "../assets/images/navigations/quiz.png";

export default function BottomNav() {
  return (
    <View className="fixed bottom-0 w-full z-50">
      <View className="flex-row justify-between items-center p-3 pb-8 pt-4 w-full bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg border border-white/20 backdrop-blur-lg">
        <TouchableOpacity className="flex-col items-center justify-center p-2">
          <Image
            source={lessonsIcon}
            className="w-8 h-8"
            resizeMode="contain"
            
          />
          <Text className="text-[10px] mt-1 text-gray-700">
            Lesson
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center p-2">
          <Image
            source={guideIcon}
            className="w-7 h-7"
            resizeMode="contain"
          />
          <Text className="text-[10px] mt-1 text-gray-700">
            Guide
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center p-2">
          <Image
            source={recordIcon}
            className="w-8 h-8"
            resizeMode="contain"
          />
          <Text className="text-[10px] mt-1 text-gray-700">
            Record
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center p-2">
          <Image
            source={tutorialIcon}
            className="w-8 h-8"
            resizeMode="contain"
          />
          <Text className="text-[10px] mt-1 text-gray-700">
            Tutorials
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-col items-center justify-center p-2">
          <Image
            source={quizIcon}
            className="w-8 h-8"
            resizeMode="contain"
          />
          <Text className="text-[10px] mt-1 text-gray-700">
            Quiz
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
