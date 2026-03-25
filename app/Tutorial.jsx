import { View, ScrollView, Text } from "react-native";
import BottomNav from "./BottomNav";
import howToReadTapeMeasureVid from "../assets/videos/tutorials/how-to-read-tape-measure.mp4";
import correctPosture from "../assets/videos/tutorials/correct-posture.mp4";
import takingBodyMeasurement from "../assets/videos/tutorials/taking-body-measurement.mp4";
import { VideoView, useVideoPlayer } from "expo-video";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useRef } from "react";
import { Feather } from "@expo/vector-icons";

const STORAGE_KEY = "tutorialprogress";

const Tutorial = () => {
  const [progress, setProgress] = useState({
    tape: false,
    measurement: false,
    posture: false,
  });

  const sectionPositions = useRef({}); // store y-offset and height for each section

  // Load previous progress
  useEffect(() => {
    const loadProgress = async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved));
    };
    loadProgress();
  }, []);

  const updateProgress = async (key) => {
    if (!progress[key]) {
      const updated = { ...progress, [key]: true };
      setProgress(updated);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      console.log("Scroll progress saved:", updated);
    }
  };

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const windowHeight = event.nativeEvent.layoutMeasurement.height;

    Object.entries(sectionPositions.current).forEach(([key, { y, height }]) => {
      // Check if section is at least partially visible
      if (scrollY + windowHeight >= y + height * 0.3 && scrollY <= y + height) {
        updateProgress(key);
      }
    });
  };

  const tapePlayer = useVideoPlayer(howToReadTapeMeasureVid, (player) => {
    player.loop = false;
  });
  const posturePlayer = useVideoPlayer(correctPosture, (player) => {
    player.loop = false;
  });
  const measurementPlayer = useVideoPlayer(takingBodyMeasurement, (player) => {
    player.loop = false;
  });

  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView
        className="px-5 pt-6"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <Text className="text-2xl font-bold text-purple-900 mb-2">
          Basic Measurement Guide
        </Text>

        <Text className="text-gray-600 mb-6">
          Watch the sample videos and follow simple steps
        </Text>

        <View
          className="bg-white p-4 rounded-2xl mb-6 shadow"
          onLayout={(e) => {
            sectionPositions.current.tape = {
              y: e.nativeEvent.layout.y,
              height: e.nativeEvent.layout.height,
            };
          }}
        >
          <Text className="text-lg font-bold text-purple-800 mb-3">
            1. How to Use a Tape Measure
          </Text>

          <VideoView
            player={tapePlayer}
            fullscreenOptions={{ enable: true }}
            allowsPictureInPicture
            style={{ height: 200, borderRadius: 12 }}
          />
          <View className="flex-row items-center mt-2">
            <Text className="text-xs mr-2 text-gray-600">Source: https://www.youtube.com/watch?v=hI-fhFyS6a8</Text>
            <Feather name="youtube" size={18} color="red" />
          </View>

          <Text className="mt-4 text-gray-700 font-semibold">Steps</Text>

          <Text className="text-gray-600 mt-2">
            1. Hold the beginning of the tape measure at number 0.
          </Text>

          <Text className="text-gray-600">
            2. Stretch the tape gently across the area you want to measure.
          </Text>

          <Text className="text-gray-600">
            3. Look at the number where the tape ends.
          </Text>

          <Text className="text-gray-600">
            4. Measurements are usually read in inches or centimeters.
          </Text>
        </View>

        <View
          className="bg-white p-4 rounded-2xl mb-6 shadow"
          onLayout={(e) => {
            sectionPositions.current.measurement = {
              y: e.nativeEvent.layout.y,
              height: e.nativeEvent.layout.height,
            };
          }}
        >
          <Text className="text-lg font-bold text-purple-800 mb-3">
            2. Taking Body Measurements
          </Text>

          <VideoView
            player={measurementPlayer}
            fullscreenOptions={{ enable: true }}
            allowsPictureInPicture
            style={{ height: 200, borderRadius: 12 }}
          />
          <View className="flex-row items-center mt-2">
            <Text className="text-xs mr-2 text-gray-600">Source: https://www.youtube.com/watch?v=3ZSfY87v6pM</Text>
            <Feather name="youtube" size={18} color="red" />
          </View>

          <Text className="mt-4 text-gray-700 font-semibold">Steps</Text>

          <Text className="text-gray-600 mt-2">
            1. Ask the person to stand straight and relaxed.
          </Text>

          <Text className="text-gray-600">
            2. Place the tape measure around the body part you want to measure.
          </Text>

          <Text className="text-gray-600">
            3. Do not pull the tape too tight or too loose.
          </Text>

          <Text className="text-gray-600">
            4. Record the measurement immediately so you don’t forget.
          </Text>
        </View>

        <View
          className="bg-white p-4 rounded-2xl mb-10 shadow"
          onLayout={(e) => {
            sectionPositions.current.posture = {
              y: e.nativeEvent.layout.y,
              height: e.nativeEvent.layout.height,
            };
          }}
        >
          <Text className="text-lg font-bold text-purple-800 mb-3">
            3. Correct Posture During Measuring
          </Text>

          <VideoView
            player={posturePlayer}
            fullscreenOptions={{ enable: true }}
            allowsPictureInPicture
            style={{ height: 200, borderRadius: 12 }}
          />
          <View className="flex-row items-center mt-2">
            <Text className="text-xs mr-2 text-gray-600">Source: https://www.youtube.com/watch?v=PopVQruxSPY&t=51s</Text>
            <Feather name="youtube" size={18} color="red" />
          </View>

          <Text className="mt-4 text-gray-700 font-semibold">Steps</Text>

          <Text className="text-gray-600 mt-2">
            1. Stand upright with your shoulders relaxed.
          </Text>

          <Text className="text-gray-600">
            2. Keep your feet slightly apart for balance.
          </Text>

          <Text className="text-gray-600">
            3. Keep your arms relaxed at your sides.
          </Text>

          <Text className="text-gray-600">
            4. Do not bend or slouch while being measured.
          </Text>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Tutorial;
