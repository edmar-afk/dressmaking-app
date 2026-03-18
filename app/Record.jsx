/* eslint-disable react/no-unescaped-entities */
import { View, ScrollView, Text, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import BottomNav from "./BottomNav";
import MeasurementModal from "./guide/MeasurementModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Table from "./guide/Table";
import { useRouter } from "expo-router";
const Guide = () => {
  const router = useRouter();
  const [measurements, setMeasurements] = useState([]);

  const loadMeasurements = async () => {
    try {
      const stored = await AsyncStorage.getItem("measurements");
      if (stored) setMeasurements(JSON.parse(stored));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMeasurements();
  }, []);

  return (
    <View className="flex-1 bg-purple-50">
      <View className="p-4">
        <Text className="text-xl font-bold text-purple-900">
          Dressmaking Measurements
        </Text>
        <Text className="text-gray-600 mt-2 leading-relaxed">
          This section allows you to record and manage your clients' dressmaking
          measurements. Add new clients and store important body measurements
          such as bust, waist, hips, sleeve length, and skirt length. You can
          also edit or delete client records whenever measurements need to be
          updated.
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between px-4 mt-8">
        <Pressable onPress={() => router.push("Converter")}>
          <Text className="text-md font-bold underline text-blue-500">
            Open Converter
          </Text>
        </Pressable>
        <MeasurementModal onSave={loadMeasurements} />
      </View>

      <Text className='p-4 text-orange-400 font-light text-lg'>If data isn't display properly, tap the record from bottom navigation again to refresh.</Text>
      <Table measurements={measurements} />

      <BottomNav />
    </View>
  );
};

export default Guide;
