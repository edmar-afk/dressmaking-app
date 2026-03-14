import { View } from "react-native";
import InfosModal from "./InfosModal";

const FrontInfo = () => {
  return (
    <View className="flex-1">
      <View className="relative">
        <View className="absolute -top-[315px] left-[23px]">
          <InfosModal
            triggerText="Armhole"
            desc="The armhole is the opening in a garment where the sleeve is attached or where the arm passes through. Measuring the armhole correctly is important because it determines how comfortable and flexible the arm movement will be. A well-measured armhole ensures that the garment does not feel too tight under the arm or too loose, which could affect the overall fit and appearance of the clothing."
            styles="-top-[290px] left-[30px]"
          />
        </View>

        <View className="absolute -top-[270px] left-[23px] ">
          <InfosModal
            triggerText="Sleeve Length"
            desc="Sleeve length is the measurement taken from the shoulder point down to the desired end of the sleeve, usually at the wrist or elbow depending on the style of the garment. Accurate sleeve length is important to make sure the sleeves are neither too short nor too long, providing both comfort and proper style for the wearer."
            styles="-top-[245px] left-[0px] "
          />
        </View>

        <View className="absolute -top-[145px] left-[23px] ">
          <InfosModal
            triggerText="Skirt Length"
            desc="Skirt length refers to the vertical measurement from the waistline down to the desired hemline of the skirt. This measurement determines how long the skirt will appear when worn. The correct skirt length ensures that the garment fits the intended design, whether it is short, knee-length, or long."
            styles="-top-[120px] left-[10px] "
          />
        </View>

        <View className="absolute -top-[125px] right-[23px]">
          <InfosModal
            triggerText="  Inseam  "
            desc="The inseam is the measurement from the crotch area down to the bottom of the pant leg. This measurement is essential for trousers and pants because it determines the correct leg length. A proper inseam measurement helps ensure that the pants fall correctly on the legs without being too long or too short."
            styles="-top-[105px] right-[39px] "
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

        <View className="absolute -top-[290px] right-[10px]">
          <InfosModal
            triggerText="Bust Circumference"
            desc="Bust circumference is the measurement taken around the fullest part of the bust while keeping the measuring tape level across the back. This measurement is important for tops, dresses, and fitted garments because it ensures proper fit and comfort around the chest area."
            styles="-top-[269px] right-[10px] "
          />
        </View>

        <View className="absolute -top-[325px] right-[10px]">
          <InfosModal
            triggerText="Shoulder Width"
            desc="Shoulder width is the measurement taken from one shoulder point to the other across the back. This measurement helps determine how well a garment will sit on the shoulders. Accurate shoulder width ensures the garment fits properly and does not look too tight or droopy."
            styles="-top-[303px] right-[20px] "
          />
        </View>

        <View className="absolute -top-[355px] right-[10px]">
          <InfosModal
            triggerText="Neck Circumference"
            desc="Neck circumference is the measurement taken around the base of the neck where a collar usually sits. This measurement is important for garments with collars or fitted necklines to ensure that the neckline is comfortable and not restrictive."
            styles="-top-[335px] right-[20px] "
          />
        </View>
      </View>
    </View>
  );
};

export default FrontInfo;
