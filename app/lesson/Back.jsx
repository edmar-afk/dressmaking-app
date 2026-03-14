import { View, Image } from "react-native";
import backImg from "../../assets/images/lesson/back.png";
import BackInfo from "./BackInfo";

const Back = () => {
  return (
   <View className="flex-1">
      <View className='relative'>
        <Image
          source={backImg}
          className="w-full h-[400px]"
          resizeMode="contain"
        />
        <BackInfo />
      </View>
    </View>
  );
};

export default Back;
