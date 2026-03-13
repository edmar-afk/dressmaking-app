import {
  View,
  Text,
  Image,
  Modal,
  Pressable,
  Animated,
  ScrollView,
} from "react-native";
import { useState, useRef } from "react";

const ToolsModal = ({ tool }) => {
  const [visible, setVisible] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  const openModal = () => {
    setVisible(true);
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setVisible(false));
  };

  return (
    <View>
      <Pressable onPress={openModal} className="flex-1">
        <View className="bg-purple-100 p-4 rounded-lg items-center flex-1 justify-between h-56">
          <Image source={tool.image} className="w-24 h-24 rounded-full mb-2" />
          <Text className="text-lg font-bold text-center">{tool.name}</Text>
          <Text className="text-sm font-light">Tap for More Info</Text>
        </View>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={closeModal}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <Animated.View
            style={{ transform: [{ scale: scaleAnim }] }}
            className="bg-white rounded-xl w-[97%] h-[95%]"
          >
            <Image
              source={tool.image}
              resizeMode="cover"
              className="w-full h-96 mb-2"
            />

            <ScrollView className="p-6 flex-1">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-bold mb-2">{tool.name}</Text>

             
              </View>

              <Text className="mt-4 font-semibold mb-1">Tool Description</Text>
              <Text className="text-gray-600 mb-3 text-justify">
                {tool.description}
              </Text>

              <Text className="mt-4 font-semibold mb-1">Uses</Text>
              <Text className="text-gray-600 mb-3 text-justify">
                {tool.uses}
              </Text>

              <Text className="mt-4 font-semibold mb-1">Proper handling</Text>
              <Text className="text-gray-600 mb-3 text-justify">
                {tool.handling}
              </Text>

              <Text className="mt-4 font-semibold mb-1">
                Cleaning and storage tips
              </Text>
              <Text className="text-gray-600 mb-24 text-justify">
                {tool.tips}
              </Text>
            </ScrollView>

            <Pressable
              onPress={closeModal}
              className="p-4 border-t border-gray-200 items-center bg-red-300"
            >
              <Text className="text-white font-semibold">Close</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default ToolsModal;
