import { View, ScrollView, Text, Pressable } from "react-native";
import BottomNav from "./BottomNav";
import { useRouter } from "expo-router";
import Career from "./page-three/Career";

const PageThree = () => {
  const router = useRouter();

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Career/>
      
        {/* <Pressable
          onPress={() => router.push("PageFour")}
          className="w-44 mx-auto "
        >
          <Text className="mt-14 text-center text-white bg-blue-700 py-4 rounded-lg font-semibold">
            Next
          </Text>
        </Pressable> */}
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default PageThree;
