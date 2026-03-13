import { View, ScrollView, Text, Pressable } from "react-native";
import BottomNav from "./BottomNav";
import { useRouter } from "expo-router";
import Definition from "./page-two/Definition";
import Importance from "./page-two/Importance";
import Important from "./page-two/Important";


const PageTwo = () => {
  const router = useRouter();

  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
      <Definition/>
      <Importance/>
      <Important/>
   
        <Pressable
          onPress={() => router.push("PageThree")}
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

export default PageTwo;
