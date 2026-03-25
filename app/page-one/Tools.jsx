/* eslint-disable react/no-unescaped-entities */
import { View, Text, Pressable } from "react-native";
import tools from "../../assets/api/data";
import ToolsModal from "./ToolsModal";
import { useRouter } from "expo-router";

const Tools = () => {
  const router = useRouter();

  return (
    <View className="">
      <Text className="text-2xl font-semibold">Measurement Tools</Text>

      <Text className="text-lg text-gray-600 mt-2">
        Measurement tools in dressmaking are devices used to take accurate body
        measurements needed in making well-fitted garments.
      </Text>
      <Text className="text-lg text-gray-600 mt-2">
        Here are the measurement tools you'll need for your dressmaking
        journey. Tap for more details:
      </Text>

      <View className="mt-4 flex flex-row flex-wrap items-stretch -mx-2">
        {tools.map((tool) => (
          <View key={tool.id} className="w-1/2 px-2 mt-4">
            <ToolsModal tool={tool} />
          </View>
        ))}
      </View>

      <Pressable
        onPress={() => router.push("PageTwo")}
        className="w-44 mx-auto "
      >
        <Text className="mt-14 text-center text-white bg-blue-700 py-4 rounded-lg font-semibold">
          Next
        </Text>
      </Pressable>
    </View>
  );
};

export default Tools;
