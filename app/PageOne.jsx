import { View, ScrollView, Text, Pressable } from "react-native";
import Greetings from "./page-one/Greetings";
import Progress from "./page-one/Progress";
import BottomNav from "./BottomNav";
import Introduction from "./page-one/Introduction";
import Tools from "./page-one/Tools";
import { useRouter } from "expo-router";
const PageOne = () => {
  const router = useRouter();

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Greetings />
        <Progress />
        <Introduction />
        <Tools />
        <Pressable
          onPress={() => router.push("PageTwo")}
          className="w-44 mx-auto "
        >
          <Text className="mt-14 text-center text-white bg-blue-700 py-4 rounded-lg font-semibold">
            Next
          </Text>
        </Pressable>
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default PageOne;
