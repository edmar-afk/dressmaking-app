import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";

const InfosModal = ({ desc, triggerText, styles, onPress }) => {
  const [visible, setVisible] = useState(false);
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setVisible(true);
    if (onPress) onPress(); // <-- notify FrontInfo that this info was clicked
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 200,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => setVisible(false));
  };

  return (
    <View>
      <Pressable
        onPress={openModal}
        className="px-4 py-2 bg-purple-600/0 rounded"
      >
        <Text className="text-white opacity-0">{triggerText}</Text>
      </Pressable>

      <Modal transparent visible={visible} animationType="none">
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: opacityAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"],
              }),
              justifyContent: "flex-end",
            }}
          >
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  height: 272,
                  backgroundColor: "white",

                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  paddingHorizontal: 16,
                  transform: [{ scale: scaleAnim }],
                  position: "relative",
                }}
              >
                <Text
                  className={`absolute ${styles} text-purple-600 px-4 py-1 rounded-lg font-bold bg-white`}
                >
                  {triggerText}
                </Text>
                <Text className="text-gray-800 p-4 text-xl text-justify">
                  {desc}
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default InfosModal;
