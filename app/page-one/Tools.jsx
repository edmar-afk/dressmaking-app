/* eslint-disable react/no-unescaped-entities */
import { View, Text } from "react-native";
import tools from "../../assets/api/data";
import ToolsModal from "./ToolsModal";

const Tools = () => {
  return (
    <View className="mt-12">
      <Text className="text-2xl font-semibold">
        Tools and Materials Included
      </Text>

      <Text className="text-lg text-gray-600 mt-2">
        Here are the tools and materials you'll need for your dressmaking
        journey. Tap for more details:
      </Text>

      <View className="mt-4 flex flex-row flex-wrap items-stretch -mx-2">
        {tools.map((tool) => (
          <View key={tool.id} className="w-1/2 px-2 mt-4">
            <ToolsModal tool={tool} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Tools;
