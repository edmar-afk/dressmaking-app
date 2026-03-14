import { View } from "react-native";
import InfosModal from "./InfosModal";

const BackInfo = () => {
  return (
    <View className="flex-1">
      <View className="relative">
        <View className="absolute -top-[290px] left-[23px]">
          <InfosModal
            triggerText="Back Length"
            desc="Back length is the vertical measurement taken from the base of the neck at the back down to the natural waistline. This measurement is important in dressmaking because it helps determine how well the garment fits the upper body. An accurate back length ensures that the garment sits properly on the shoulders and aligns correctly with the waist, preventing the clothing from appearing too short or too long in the back."
            styles="-top-[270px] left-[20px]"
          />
        </View>
        <View className="absolute -top-[225px] right-[23px]">
          <InfosModal
            triggerText="Hip Circumference"
            desc="Hip circumference is the measurement taken around the fullest part of the hips and buttocks. This measurement is important for garments such as skirts, dresses, and pants because it ensures enough room for movement and comfort while maintaining the proper fit around the lower body."
            styles="-top-[205px] right-[10px] "
          />
        </View>

        <View className="absolute -top-[258px] right-[10px]">
          <InfosModal
            triggerText="Waist Circumference"
            desc="Waist circumference is the measurement around the natural waistline, which is usually the narrowest part of the torso. This measurement is crucial for creating garments that fit comfortably around the waist without being too tight or too loose. It helps determine the proper size for skirts, pants, and dresses."
            styles="-top-[235px] right-[10px] "
          />
        </View>
        <View className="absolute -top-[325px] right-[10px]">
          <InfosModal
            triggerText="Shoulder Width"
            desc="Shoulder width is the measurement taken from one shoulder point to the other across the back. This measurement helps determine how well a garment will sit on the shoulders. Accurate shoulder width ensures the garment fits properly and does not look too tight or droopy."
            styles="-top-[313px] right-[21px] "
          />
        </View>
      </View>
    </View>
  );
};

export default BackInfo;
