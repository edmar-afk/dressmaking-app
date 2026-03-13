import { View, Text, Image } from "react-native";
import importanceImg from "../../assets/images/dresses/importance.png";
const Importance = () => {
  return (
    <View className="mt-12">
      <Image
        source={importanceImg}
        resizeMode="cover"
        className="w-full h-72 rounded-xl"
      />
      <Text className="text-2xl font-bold mt-8">
        Importance of dressmaking in daily life and fashion industry
      </Text>

      <Text className="text-lg text-gray-600 mt-3 leading-7">
        Dressmaking plays an important role in both daily life and the fashion
        industry because it allows people to create, repair, and customize
        clothing according to their needs and personal style. In everyday life,
        dressmaking helps individuals save money by repairing damaged garments,
        adjusting sizes, or creating clothes instead of buying new ones. It also
        encourages creativity and self-expression, as people can design clothing
        that reflects their personality and comfort. In the fashion industry,
        dressmaking is a fundamental skill used by designers and tailors to
        transform ideas into wearable garments. It involves pattern making,
        fabric selection, cutting, and sewing, which are essential processes in
        producing high-quality clothing. Additionally, dressmaking supports
        sustainability by promoting clothing repair and reuse, reducing textile
        waste
      </Text>
    </View>
  );
};

export default Importance;
