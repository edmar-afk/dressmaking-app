import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import lessonsIcon from "../assets/images/navigations/lessons.png";
import guideIcon from "../assets/images/navigations/measurement.png";
import recordIcon from "../assets/images/navigations/record.png";
import tutorialIcon from "../assets/images/navigations/tutorial.png";
import quizIcon from "../assets/images/navigations/quiz.png";
import homeIcon from "../assets/images/navigations/home.png";
import { useRouter, usePathname } from "expo-router";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "home", icon: homeIcon, route: "/PageOne" },
    { name: "Lesson", icon: lessonsIcon, route: "/Lesson" },
    { name: "Guide", icon: guideIcon, route: "/Guide" },
    { name: "Record", icon: recordIcon, route: "/Record" },
    { name: "Tutorial", icon: tutorialIcon, route: "/Tutorial" },
    { name: "Quiz", icon: quizIcon, route: "/Quiz" },
  ];

  return (
    <View className="fixed bottom-0 w-full z-50">
      <View className="flex-row justify-between items-center p-3 pb-8 pt-4 w-full bg-white/80 rounded-2xl shadow-lg border border-white/20 backdrop-blur-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <TouchableOpacity
              key={item.route}
              onPress={() => router.push(item.route)}
              className="flex-col items-center justify-center p-2"
            >
              <Image
                source={item.icon}
                className="w-8 h-8"
                resizeMode="contain"
                style={{ tintColor: isActive ? "#7c3aed" : undefined }}
              />
              <Text
                className={`text-[10px] mt-1 ${
                  isActive
                    ? "text-purple-600 font-bold underline"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
