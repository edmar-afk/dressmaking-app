import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import BottomNav from "./BottomNav";
import { useRouter } from "expo-router";

const Converter = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("in"); // in or cm
  const [converted, setConverted] = useState(null);
  const [seamAllowance, setSeamAllowance] = useState(null);
  const [ease, setEase] = useState("Fitted");

  const handleConvert = () => {
    if (!value || isNaN(value)) {
      Alert.alert("Invalid Input", "Please enter a valid number.");
      return;
    }

    let result;
    if (unit === "in") {
      result = (parseFloat(value) * 2.54).toFixed(2) + " cm";
    } else {
      result = (parseFloat(value) / 2.54).toFixed(2) + " in";
    }
    setConverted(result);
  };

  const handleSeamAllowance = () => {
    if (!value || isNaN(value)) {
      Alert.alert("Invalid Input", "Please enter a valid number.");
      return;
    }
    const allowance = (parseFloat(value) * 0.015).toFixed(2);
    setSeamAllowance(allowance + (unit === "in" ? " in" : " cm"));
  };

  const handleEaseSuggestion = () => {
    if (!value || isNaN(value)) {
      Alert.alert("Invalid Input", "Please enter a valid number.");
      return;
    }
    let suggested;
    const num = parseFloat(value);
    switch (ease) {
      case "Fitted":
        suggested = (num - 1).toFixed(2);
        break;
      case "Semi-fitted":
        suggested = (num + 2).toFixed(2);
        break;
      case "Loose":
        suggested = (num + 4).toFixed(2);
        break;
      default:
        suggested = num;
    }
    Alert.alert(
      "Suggested Pattern Size",
      `${suggested} ${unit === "in" ? "in" : "cm"}`,
    );
  };

  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView className="p-4">
        <Text className="text-3xl font-bold text-purple-900">
          Dressmaking Converter
        </Text>
        <Text className="text-gray-600 mt-2 mb-4 text-justify text-lg">
          Convert measurements, calculate seam allowances, and get ease
          suggestions for your patterns.
        </Text>
        <Pressable onPress={() => router.push("Record")} className="my-8">
          <Text className="text-lg font-bold underline text-blue-500">
            Open Measurement Recorder
          </Text>
        </Pressable>
        <View className="bg-white rounded-xl p-4 shadow mb-6">
          <Text className="font-semibold text-purple-800 mb-2 text-lg">
            Measurement Input
          </Text>
          <TextInput
            placeholder="Enter value"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
            className="border border-gray-300 rounded p-2 mb-2"
          />
          <View className="flex-row justify-between mb-2">
            <Pressable
              className={`px-4 py-2 rounded ${unit === "in" ? "bg-purple-700" : "bg-gray-200"}`}
              onPress={() => setUnit("in")}
            >
              <Text
                className={`${unit === "in" ? "text-white" : "text-gray-700"}`}
              >
                Inches
              </Text>
            </Pressable>
            <Pressable
              className={`px-4 py-2 rounded ${unit === "cm" ? "bg-purple-700" : "bg-gray-200"}`}
              onPress={() => setUnit("cm")}
            >
              <Text
                className={`${unit === "cm" ? "text-white" : "text-gray-700"}`}
              >
                Centimeters
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={handleConvert}
            className="bg-purple-600 rounded py-2 mt-2"
          >
            <Text className="text-white text-center font-bold">Convert</Text>
          </Pressable>
          {converted && (
            <Text className="mt-2 text-gray-800">Converted: {converted}</Text>
          )}
        </View>

        <View className="bg-white rounded-xl p-4 shadow mb-6">
          <Text className="font-semibold text-purple-800 mb-2">
            Seam Allowance
          </Text>
          <Pressable
            onPress={handleSeamAllowance}
            className="bg-purple-600 rounded py-2 mt-2"
          >
            <Text className="text-white text-center font-bold">
              Calculate Seam Allowance
            </Text>
          </Pressable>
          {seamAllowance && (
            <Text className="mt-2 text-gray-800">
              Seam Allowance: {seamAllowance}
            </Text>
          )}
        </View>

        <View className="bg-white rounded-xl p-4 shadow mb-6">
          <Text className="font-semibold text-purple-800 mb-2">
            Ease Allowance Suggestion
          </Text>
          <View className="flex-row justify-between mb-2">
            {["Fitted", "Semi-fitted", "Loose"].map((type) => (
              <Pressable
                key={type}
                className={`px-3 py-2 rounded ${ease === type ? "bg-purple-700" : "bg-gray-200"}`}
                onPress={() => setEase(type)}
              >
                <Text
                  className={`${ease === type ? "text-white" : "text-gray-700"}`}
                >
                  {type}
                </Text>
              </Pressable>
            ))}
          </View>
          <Pressable
            onPress={handleEaseSuggestion}
            className="bg-purple-600 rounded py-2 mt-2"
          >
            <Text className="text-white text-center font-bold">
              Suggest Pattern Size
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default Converter;
