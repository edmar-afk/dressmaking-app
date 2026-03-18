import { View, ScrollView, Image } from "react-native";
import BottomNav from "./BottomNav";
import guideImg from "../assets/images/guide/guide.png";

const Guide = () => {
  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <Image
          source={guideImg}
          resizeMode="contain"
          className="w-full h-[100%] mx-auto -mt-14"
          style={{ aspectRatio: 0.45 }}
        />
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Guide;
