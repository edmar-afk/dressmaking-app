import { View } from "react-native";
import React, { useState, useEffect } from "react";
import InfosModal from "./InfosModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "infosClickedCount";
const TOTAL_LESSONS = 13; // total number of lessons across FrontInfo + BackInfo

const BackInfo = () => {
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

  const infoItems = [
    {
      id: "backLength",
      triggerText: "Back Length",
      desc: "Back length is the vertical measurement taken from the base of the neck at the back down to the natural waistline. This measurement is important in dressmaking because it helps determine how well the garment fits the upper body. An accurate back length ensures that the garment sits properly on the shoulders and aligns correctly with the waist, preventing the clothing from appearing too short or too long in the back.",
      position: { top: -290, left: 23 },
      styles: "-top-[270px] left-[20px]",
    },
    {
      id: "backHip",
      triggerText: "Hip Circumference",
      desc: "Hip circumference is the measurement taken around the fullest part of the hips and buttocks. This measurement is important for garments such as skirts, dresses, and pants because it ensures enough room for movement and comfort while maintaining the proper fit around the lower body.",
      position: { top: -225, right: 23 },
      styles: "-top-[205px] right-[10px]",
    },
    {
      id: "backWaist",
      triggerText: "Waist Circumference",
      desc: "Waist circumference is the measurement around the natural waistline, which is usually the narrowest part of the torso. This measurement is crucial for creating garments that fit comfortably around the waist without being too tight or too loose. It helps determine the proper size for skirts, pants, and dresses.",
      position: { top: -258, right: 10 },
      styles: "-top-[235px] right-[10px]",
    },
    {
      id: "shoulderWidth",
      triggerText: "Shoulder Width",
      desc: "Shoulder width is the measurement taken from one shoulder point to the other across the back. This measurement helps determine how well a garment will sit on the shoulders. Accurate shoulder width ensures the garment fits properly and does not look too tight or droopy.",
      position: { top: -325, right: 10 },
      styles: "-top-[313px] right-[21px]",
    },
  ];

  return (
    <View className="flex-1">
      <View className="relative">
        {infoItems.map((info) => (
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

export default BackInfo;
