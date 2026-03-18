import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import badges from "../../assets/api/badges";

const BadgeCard = () => {
  const [scores, setScores] = useState({});

  useEffect(() => {
    const loadScores = async () => {
      const updatedScores = {};

      for (let badge of badges) {
        try {
          const stored = await AsyncStorage.getItem(badge.storageKey);
          if (!stored) {
            updatedScores[badge.storageKey] = 0;
            continue;
          }

          const parsed = JSON.parse(stored);

          if (badge.storageKey === "tutorialprogress") {
            const completedCount = Object.values(parsed).filter(Boolean).length;
            updatedScores[badge.storageKey] = completedCount;
          } else if (badge.storageKey === "infosClickedCount") {
            const count = Array.isArray(parsed) ? parsed.length : 0;
            updatedScores[badge.storageKey] = count;
          } else if (badge.storageKey === "guide") {
            const progress = typeof parsed === "number" ? parsed : 0;
            updatedScores[badge.storageKey] = progress;
          } else {
            updatedScores[badge.storageKey] =
              typeof parsed === "object" ? parsed.score : parsed;
          }
        } catch (e) {
          console.log("Error loading badge", badge.storageKey, e);
          updatedScores[badge.storageKey] = 0;
        }
      }

      setScores(updatedScores);
    };

    loadScores();
  }, []);

  return (
    <View className="mt-8 flex-row flex-wrap justify-between">
      {badges.map((badge) => {
        const score = scores[badge.storageKey] || 0;
        const unlocked = score >= badge.passingScore;

        return (
          <View
            key={badge.id}
            className={`mb-4 w-[48%] rounded-2xl shadow border ${
              unlocked
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            {badge.image && (
              <Image
                source={badge.image}
                className="w-full h-24 rounded-t-2xl mt-4"
                resizeMode="contain"
                style={{ opacity: unlocked ? 1 : 0.1 }}
              />
            )}

            <View className="p-3 items-center">
              <View
                className={`px-2 py-1 rounded-full mb-2 ${
                  unlocked
                    ? "bg-green-200 border border-green-400"
                    : "bg-red-200 border border-red-400"
                }`}
              >
                <Text
                  className={`text-[10px] font-semibold ${
                    unlocked ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {unlocked ? "Unlocked" : "Locked"}
                </Text>
              </View>

              <Text
                className={`text-sm font-semibold text-center mb-1 ${
                  unlocked ? "text-green-800" : "text-red-800"
                }`}
              >
                {badge.name}
              </Text>

              <Text
                className="text-[10px] text-gray-600 text-center mb-1"
                numberOfLines={2}
              >
                {badge.desc}
              </Text>

              <Text
                className={`text-xs font-bold ${
                  unlocked ? "text-green-700" : "text-red-700"
                }`}
              >
                {score}/{badge.total}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default BadgeCard;
