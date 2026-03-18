import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import BottomNav from "./BottomNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  mc: "multipleChoiceScore",
  tf: "trueOrFalseScore",
  id: "identificationScore",
};

const Quiz = () => {
  const router = useRouter();

  const [greeting, setGreeting] = useState("");
  const [scores, setScores] = useState({
    multipleChoice: 0,
    trueOrFalse: 0,
    identification: 0,
  });

  const [cheer, setCheer] = useState("");

  useEffect(() => {
    const time = new Date().getHours();

    if (time < 10) setGreeting("Good morning");
    else if (time < 20) setGreeting("Good day");
    else setGreeting("Good evening");

    loadScores();
  }, []);

  useEffect(() => {
    generateCheer();
  }, [scores]);

  const loadScores = async () => {
    try {
      const mcRaw = await AsyncStorage.getItem("multipleChoiceScore");
      const tfRaw = await AsyncStorage.getItem("trueOrFalseScore");
      const idRaw = await AsyncStorage.getItem("identificationScore");

      const mc = mcRaw ? JSON.parse(mcRaw) : null;
      const tf = tfRaw ? JSON.parse(tfRaw) : null;
      const id = idRaw ? JSON.parse(idRaw) : null;

      setScores({
        multipleChoice: mc?.score ?? 0,
        trueOrFalse: tf?.score ?? 0,
        identification: id?.score ?? 0,
      });
    } catch (e) {
      console.log("Error loading scores:", e);
    }
  };

  const generateCheer = () => {
    const { multipleChoice, trueOrFalse, identification } = scores;
    const avg = (multipleChoice + trueOrFalse + identification) / 3;

    if (avg < 3) {
      setCheer(
        "You're just getting started! 📘 Try learning the basics first and build a strong foundation.",
      );
    } else if (avg < 6) {
      setCheer(
        "Nice effort! 💪 You're improving—keep practicing to sharpen your knowledge.",
      );
    } else if (avg < 9) {
      setCheer("Great job! 🔥 You’re doing well—just a bit more to master it.");
    } else {
      setCheer(
        "Excellent work! 🎉 You’ve mastered this—keep challenging yourself!",
      );
    }
  };

  const getCheer = (score) => {
    if (score <= 1) {
      return "Start with the basics 📘";
    } else if (score <= 2) {
      return "Keep practicing 💪";
    } else if (score <= 3) {
      return "You're getting there 👍";
    } else if (score <= 4) {
      return "Almost perfect 🔥";
    } else {
      return "Excellent! 🎉";
    }
  };

  return (
    <View className="flex-1 bg-purple-100">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        className="p-4"
      >
        <View className="bg-white rounded-3xl p-6 shadow-2xl">
          <Text className="text-base text-gray-500">{greeting}, 👋</Text>

          <Text className="text-3xl font-bold mt-1">
            Ready to test your{" "}
            <Text className="text-purple-600">Knowledge?</Text>
          </Text>

          <Text className="text-gray-500 mt-3">
            Choose a quiz and track your progress.
          </Text>

          {/* Cheer Message */}
          <View className="mt-4 bg-purple-50 border border-purple-200 p-4 rounded-xl">
            <Text className="text-purple-700 font-medium text-center">
              {cheer}
            </Text>
          </View>

          <View className="mt-8 gap-4">
            <Pressable
              onPress={() => router.push("/MultipleChoice")}
              className="bg-purple-500 py-5 px-4 rounded-2xl shadow-md active:opacity-80 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-white text-lg font-semibold">
                  Multiple Choice
                </Text>
                <Text className="text-purple-100 text-sm mt-1">
                  Pick the correct answer
                </Text>
              </View>

              <View className="bg-white/20 px-4 py-2 rounded-xl">
                <Text className="text-white font-bold text-lg">
                  {scores.multipleChoice}
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/Identification")}
              className="bg-white border border-purple-500 py-5 px-4 rounded-2xl shadow-sm active:opacity-80 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-purple-600 text-lg font-semibold">
                  Identification
                </Text>
                <Text className="text-gray-500 text-sm mt-1">
                  Type your answer
                </Text>
              </View>

              <View className="bg-purple-100 px-4 py-2 rounded-xl">
                <Text className="text-purple-700 font-bold text-lg">
                  {scores.identification}
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => router.push("/TrueOrFalse")}
              className="bg-purple-500 py-5 px-4 rounded-2xl shadow-md active:opacity-80 flex-row justify-between items-center"
            >
              <View>
                <Text className="text-white text-lg font-semibold">
                  True or False
                </Text>
                <Text className="text-purple-100 text-sm mt-1">
                  Decide if it’s correct
                </Text>
              </View>

              <View className="bg-white/20 px-4 py-2 rounded-xl">
                <Text className="text-white font-bold text-lg">
                  {scores.trueOrFalse}
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Quiz;
