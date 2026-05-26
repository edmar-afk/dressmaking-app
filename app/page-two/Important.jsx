import { View, Text, Image } from "react-native";
import importanceImg from "../../assets/images/page-two/importance.png";
import importance1 from "../../assets/images/page-two/importance1.png";
import importance2 from "../../assets/images/page-two/importance2.png";
import importance3 from "../../assets/images/page-two/importance3.png";

const FeatureItem = ({ title, desc, icon }) => {
  return (
    <View className="flex-row items-start gap-4 mb-8 pr-3">
      <View className="bg-violet-500 p-3 rounded-full">
        <Image source={icon} className="w-8 h-8" resizeMode="contain" />
      </View>

      <View className="flex-1">
        <Text className="font-semibold text-2xl">{title}</Text>
        <Text className="text-gray-500 mt-1 text-lg text-justify">{desc}</Text>
      </View>
    </View>
  );
};

const Important = () => {
  return (
    <View className="mt-12">
      <View className="relative">
        <Image
          source={importanceImg}
          resizeMode="cover"
          className="w-full h-72 rounded-xl"
        />

        <View className="mt-8">
          <Text className="text-3xl font-bold">
            Why accurate measurements are important
          </Text>

          <Text className="mt-2 text-xl text-justify">
            Proper measurements ensure clothes fit correctly and comfortably.
          </Text>
        </View>
      </View>

      <View className="mt-10">
        <FeatureItem
          icon={importance1}
          title="Proper fitting clothes"
          desc="Taking accurate body measurements ensures that garments are tailored to match the wearer’s body shape. Proper fitting clothes improve mobility, comfort, and overall confidence when wearing the garment."
        />

        <FeatureItem
          icon={importance2}
          title="Comfort and appearance"
          desc="Correct measurements help create clothing that feels comfortable and looks well-balanced on the body. This prevents garments from being too tight, too loose, or uneven, which improves both comfort and visual appeal."
        />

        <FeatureItem
          icon={importance3}
          title="Basic dressmaking workflow: Measurement → Pattern → Cutting → Sewing"
          desc="Dressmaking follows a step-by-step process that begins with accurate measurements. These measurements guide pattern creation, fabric cutting, and sewing, ensuring the final garment fits properly and is professionally made."
        />
      </View>
    </View>
  );
};

export default Important;
