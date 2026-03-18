import { View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomNav from "./BottomNav";
import guideImg from "../assets/images/guide/guide.png";

const Guide = () => {
  useEffect(() => {
    const saveGuideProgress = async () => {
      try {
        const storedValue = await AsyncStorage.getItem("guide");
        if (!storedValue || Number(storedValue) < 100) {
          await AsyncStorage.setItem("guide", "100");
        }
      } catch (error) {
        console.log("Error saving guide progress:", error);
      }
    };

    saveGuideProgress();
  }, []);

  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <Image
          source={guideImg}
          resizeMode="contain"
          className="w-full h-[100%] mx-auto -mt-14"
          style={{ aspectRatio: 0.45 }}
        />
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Guide;
