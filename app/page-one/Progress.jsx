/* eslint-disable react/no-unescaped-entities */
import progressImg from "../../assets/images/some/progress.png";
import { View, Text, Image } from "react-native";
import QuickButtons from "./QuickButtons";
const Progress = () => {
  return (
    <View className="mt-8">
      <View
        className="flex-row items-center border border-gray-200 p-4 rounded-xl bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <View className="w-12 h-12 bg-purple-400 rounded-full items-center justify-center">
          <Image source={progressImg} className="w-8 h-8" />
        </View>

        <View className="flex flex-col">
          <Text className="ml-3 text-lg font-bold">Progress Overview</Text>
          <Text className="ml-3 text-xl font-normal">
            Monitor your learning below.
          </Text>
        </View>
      </View>
      <QuickButtons />
     
    </View>
  );
};

export default Progress;
