import { View, ScrollView } from "react-native";
import Greetings from "./Greetings";
import Progress from "./Progress";
import BottomNav from "../BottomNav";

const PageOne = () => {
  return (
    <View className="flex-1 relative bg-purple-50">
      <ScrollView
        className="p-4"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Greetings />
        <Progress />
      </ScrollView>
      <BottomNav />
    </View>
  );
};

export default PageOne;
