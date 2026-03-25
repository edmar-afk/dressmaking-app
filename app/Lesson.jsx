import { View, ScrollView, Text, Pressable } from "react-native";
import { useState } from "react";
import BottomNav from "./BottomNav";
import Front from "./lesson/Front";
import Back from "./lesson/Back";
import Toggle from "./lesson/Toggle";
import Tools from "./page-one/Tools";

const Lesson = () => {
  const [screen, setScreen] = useState("diagram"); // diagram | tools
  const [diagramView, setDiagramView] = useState("front"); // front | back

  return (
    <View className="flex-1 relative bg-purple-50">
      {screen === "diagram" && (
        <ScrollView
          className="p-4"
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <Text className="text-2xl font-bold">Interactive Body Diagram</Text>
          <Text className="text-lg">
            Front and back human figure illustration.
          </Text>

          <View className="flex-row gap-3 mt-4 mb-6">
            <Pressable
              onPress={() => setDiagramView("front")}
              className={`px-4 py-2 rounded-lg ${
                diagramView === "front" ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <Text
                className={`font-semibold ${
                  diagramView === "front" ? "text-white" : "text-black"
                }`}
              >
                Front
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setDiagramView("back")}
              className={`px-4 py-2 rounded-lg ${
                diagramView === "back" ? "bg-purple-600" : "bg-gray-200"
              }`}
            >
              <Text
                className={`font-semibold ${
                  diagramView === "back" ? "text-white" : "text-black"
                }`}
              >
                Back
              </Text>
            </Pressable>
          </View>

          {diagramView === "front" ? <Front /> : <Back />}
        </ScrollView>
      )}
      {screen === "tools" && (
        <ScrollView
          className="p-4"
          contentContainerStyle={{ paddingBottom: 140 }}
        >
          <Tools />
        </ScrollView>
      )}
      <Toggle screen={screen} setScreen={setScreen} />
     
      <BottomNav />
    </View>
  );
};

export default Lesson;
