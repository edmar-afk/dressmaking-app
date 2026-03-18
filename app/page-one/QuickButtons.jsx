import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import lessonsIcon from "../../assets/images/navigations/lessons.png";
import guideIcon from "../../assets/images/navigations/measurement.png";
import recordIcon from "../../assets/images/navigations/record.png";
import tutorialIcon from "../../assets/images/navigations/tutorial.png";
import quizIcon from "../../assets/images/navigations/quiz.png";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QuickButtons = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    loadScores();
  }, []);

  const loadScores = async () => {
    try {
      const mcRaw = await AsyncStorage.getItem("multipleChoiceScore");
      const tfRaw = await AsyncStorage.getItem("trueOrFalseScore");
      const idRaw = await AsyncStorage.getItem("identificationScore");

      const mc = mcRaw ? JSON.parse(mcRaw) : null;
      const tf = tfRaw ? JSON.parse(tfRaw) : null;
      const id = idRaw ? JSON.parse(idRaw) : null;

      const mcScore = mc?.score ?? 0;
      const tfScore = tf?.score ?? 0;
      const idScore = id?.score ?? 0;

      const total = mcScore + tfScore + idScore; // max 15
      const percent = Math.round((total / 15) * 100);

      setTotalScore(total);
      setPercentage(percent);
    } catch (e) {
      console.log("Error loading scores:", e);
    }
  };
  return (
    <View className="mt-12">
      <View className="flex-row gap-2">
        <LinearGradient
          colors={["#4C1D95", "#6D28D9", "#A78BFA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 h-32 rounded-lg overflow-hidden items-start justify-end relative p-4"
        >
          <Image
            source={lessonsIcon}
            className="absolute top-4 right-8 w-20 h-20"
            style={{ tintColor: "white" }}
          />
          <View>
            <Text className="text-4xl text-white font-bold">50%</Text>
            <Text className="text-lg text-white font-normal">Lesson</Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["#4C1D95", "#6D28D9", "#A78BFA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 h-32 rounded-lg overflow-hidden items-start justify-end relative p-4"
        >
          <Image
            source={guideIcon}
            className="absolute top-4 right-8 w-20 h-20"
            style={{ tintColor: "white" }}
          />
          <View>
            <Text className="text-4xl text-white font-bold">50%</Text>
            <Text className="text-lg text-white font-normal">Guide</Text>
          </View>
        </LinearGradient>
      </View>
      <View className="flex-row gap-2 mt-4">
        <LinearGradient
          colors={["#4C1D95", "#6D28D9", "#A78BFA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 h-32 rounded-lg overflow-hidden items-start justify-end relative p-4"
        >
          <Image
            source={recordIcon}
            className="absolute top-4 right-4 w-12 h-12"
            style={{ tintColor: "white" }}
          />
          <View>
            <Text className="text-xl text-white font-bold">1</Text>
            <Text className="text-md text-white font-normal">
              Record Measurements
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={["#4C1D95", "#6D28D9", "#A78BFA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 h-32 rounded-lg overflow-hidden items-start justify-end relative p-4"
        >
          <Image
            source={tutorialIcon}
            className="absolute top-4 right-4 w-12 h-12"
            style={{ tintColor: "white" }}
          />
          <View>
            <Text className="text-xl text-white font-bold">49%</Text>
            <Text className="text-md text-white font-normal">Tutorials</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#4C1D95", "#6D28D9", "#A78BFA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1 h-32 rounded-lg overflow-hidden items-start justify-end relative p-4"
        >
          <Image
            source={quizIcon}
            className="absolute top-4 right-4 w-12 h-12"
            style={{ tintColor: "white" }}
          />
          <View>
            <View className='flex flex-row items-end gap-1'>
              <Text className="text-xl text-white font-bold">
                {totalScore}/15
              </Text>
              <Text className="text-xs text-white mb-0.5"> {percentage}% overall</Text>
            </View>
            <Text className="text-md text-white font-normal">Quiz Score</Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default QuickButtons;
