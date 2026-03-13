import { View, Text, Image } from "react-native";
import definitionImg from "../../assets/images/dresses/definition.jpg";

const Definition = () => {
  return (
    <View className="mt-4">
      <Image
        source={definitionImg}
        resizeMode="cover"
        className="w-full h-72 rounded-xl"
      />
      <Text className="text-2xl font-bold mt-8">Definition of Dressmaking</Text>

      <Text className="text-lg text-gray-600 mt-3 leading-7">
        Dressmaking is the process of designing, measuring, cutting, and sewing
        fabric to create garments such as dresses, skirts, blouses, and other
        clothing. It involves different skills including taking body
        measurements, pattern making, fabric selection, and proper sewing
        techniques. Dressmaking allows a person to create well-fitted and
        personalized clothing based on style, size, and design preferences.
      </Text>
    </View>
  );
};

export default Definition;
