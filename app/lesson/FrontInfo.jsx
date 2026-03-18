import { View } from "react-native";
import React, { useState, useEffect } from "react";
import InfosModal from "./InfosModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "infosClickedCount";

const FrontInfo = () => {
  const [clickedInfos, setClickedInfos] = useState([]);

  useEffect(() => {
    const loadClickedInfos = async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setClickedInfos(JSON.parse(stored));
    };
    loadClickedInfos();
  }, []);

  const handleInfoClick = async (id) => {
    if (!clickedInfos.includes(id)) {
      const updated = [...clickedInfos, id];
      setClickedInfos(updated);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  };

  const infos = [
    {
      id: "armhole",
      triggerText: "Armhole",
      desc: "The armhole is the opening in a garment where the sleeve is attached or where the arm passes through. Measuring the armhole correctly is important because it determines how comfortable and flexible the arm movement will be. A well-measured armhole ensures that the garment does not feel too tight under the arm or too loose, which could affect the overall fit and appearance of the clothing.",
      styles: "-top-[290px] left-[30px]",
      position: { top: -315, left: 23 },
    },
    {
      id: "sleeve",
      triggerText: "Sleeve Length",
      desc: "Sleeve length is the measurement taken from the shoulder point down to the desired end of the sleeve, usually at the wrist or elbow depending on the style of the garment. Accurate sleeve length is important to make sure the sleeves are neither too short nor too long, providing both comfort and proper style for the wearer.",
      styles: "-top-[245px] left-[0px]",
      position: { top: -270, left: 23 },
    },
    {
      id: "skirt",
      triggerText: "Skirt Length",
      desc: "Skirt length refers to the vertical measurement from the waistline down to the desired hemline of the skirt. This measurement determines how long the skirt will appear when worn. The correct skirt length ensures that the garment fits the intended design, whether it is short, knee-length, or long.",
      styles: "-top-[120px] left-[10px]",
      position: { top: -145, left: 23 },
    },
    {
      id: "inseam",
      triggerText: "Inseam",
      desc: "The inseam is the measurement from the crotch area down to the bottom of the pant leg. This measurement is essential for trousers and pants because it determines the correct leg length. A proper inseam measurement helps ensure the pants fall correctly on the legs without being too long or too short.",
      styles: "-top-[105px] right-[39px]",
      position: { top: -125, right: 23 },
    },
    {
      id: "hip",
      triggerText: "Hip Circumference",
      desc: "Hip circumference is the measurement taken around the fullest part of the hips and buttocks. This measurement is important for garments such as skirts, dresses, and pants because it ensures enough room for movement and comfort while maintaining the proper fit around the lower body.",
      styles: "-top-[205px] right-[10px]",
      position: { top: -225, right: 23 },
    },
    {
      id: "waist",
      triggerText: "Waist Circumference",
      desc: "Waist circumference is the measurement around the natural waistline, which is usually the narrowest part of the torso. This measurement is crucial for creating garments that fit comfortably around the waist without being too tight or too loose. It helps determine the proper size for skirts, pants, and dresses.",
      styles: "-top-[235px] right-[10px]",
      position: { top: -258, right: 10 },
    },
    {
      id: "bust",
      triggerText: "Bust Circumference",
      desc: "Bust circumference is the measurement taken around the fullest part of the bust while keeping the measuring tape level across the back. This measurement is important for tops, dresses, and fitted garments because it ensures proper fit and comfort around the chest area.",
      styles: "-top-[269px] right-[10px]",
      position: { top: -290, right: 10 },
    },
    {
      id: "shoulder",
      triggerText: "Shoulder Width",
      desc: "Shoulder width is the measurement taken from one shoulder point to the other across the back. This measurement helps determine how well a garment will sit on the shoulders. Accurate shoulder width ensures the garment fits properly and does not look too tight or droopy.",
      styles: "-top-[303px] right-[20px]",
      position: { top: -325, right: 10 },
    },
    {
      id: "neck",
      triggerText: "Neck Circumference",
      desc: "Neck circumference is the measurement taken around the base of the neck where a collar usually sits. This measurement is important for garments with collars or fitted necklines to ensure that the neckline is comfortable and not restrictive.",
      styles: "-top-[335px] right-[20px]",
      position: { top: -355, right: 10 },
    },
  ];

  return (
    <View className="flex-1">
      <View className="relative">
        {infos.map((info) => (
          <View
            key={info.id}
            className="absolute"
            style={{
              top: info.position.top,
              left: info.position.left,
              right: info.position.right,
            }}
          >
            <InfosModal
              triggerText={info.triggerText}
              desc={info.desc}
              styles={info.styles}
              onPress={() => handleInfoClick(info.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default FrontInfo;
