import { View, Text, Image, Pressable } from "react-native";
import toolsImg from "../../assets/images/lesson/tools.png";
import diagramImg from "../../assets/images/lesson/diagram.png";

const Toggle = ({ screen, setScreen }) => {
  return (
    <View className="absolute bottom-32 left-0 right-0 flex-row justify-center gap-8 items-center z-50">
      <Pressable onPress={() => setScreen("tools")} className="items-center">
        <View
          className={`p-3 rounded-full ${
            screen === "tools" ? "bg-purple-500" : "bg-gray-900"
          }`}
        >
          <Image source={toolsImg} className="w-8 h-8" />
        </View>
        <Text
          className={`${
            screen === "tools" ? "text-purple-600 font-bold" : "text-gray-800"
          }`}
        >
          Tools
        </Text>
      </Pressable>

      <Pressable onPress={() => setScreen("diagram")} className="items-center">
        <View
          className={`p-3 rounded-full ${
            screen === "diagram" ? "bg-purple-500" : "bg-gray-900"
          }`}
        >
          <Image source={diagramImg} className="w-8 h-8" />
        </View>
        <Text
          className={`${
            screen === "diagram" ? "text-purple-600 font-bold" : "text-gray-800"
          }`}
        >
          Diagram
        </Text>
      </Pressable>
    </View>
  );
};

export default Toggle;
