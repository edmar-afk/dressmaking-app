import { View, ScrollView, Text, Pressable } from "react-native";
import { useState } from "react";
import BottomNav from "./BottomNav";
import Front from "./lesson/Front";
import Back from "./lesson/Back";

const Lesson = () => {
  const [view, setView] = useState("front");

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-bold">
         Interactive Body Diagram
        </Text>
         <Text className="text-lg">
         Front and back human figure illustration.
        </Text>

        <View className="flex-row gap-3 mt-4 mb-6">
          <Pressable
            onPress={() => setView("front")}
            className={`px-4 py-2 rounded-lg ${
              view === "front" ? "bg-purple-600" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                view === "front" ? "text-white" : "text-black"
              }`}
            >
              Front
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setView("back")}
            className={`px-4 py-2 rounded-lg ${
              view === "back" ? "bg-purple-600" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                view === "back" ? "text-white" : "text-black"
              }`}
            >
              Back
            </Text>
          </Pressable>
        </View>

        {view === "front" ? <Front /> : <Back />}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Lesson;
