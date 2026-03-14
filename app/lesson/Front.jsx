import { View, Text, Image } from "react-native";
import frontImg from "../../assets/images/lesson/front.png";
import FrontInfo from "./FrontInfo";

const Front = () => {
  return (
    <View className="flex-1">
      <View className='relative'>
        <Image
          source={frontImg}
          className="w-full h-[400px]"
          resizeMode="contain"
        />
        <FrontInfo />
      </View>
    </View>
  );
};

export default Front;
