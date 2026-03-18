import { View, ScrollView, Text, Pressable, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import EditModal from "./EditModal";

const Table = () => {
  const [measurements, setMeasurements] = useState([]);
  const [selectedMeasurement, setSelectedMeasurement] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const loadMeasurements = async () => {
    try {
      const stored = await AsyncStorage.getItem("measurements");
      if (stored) setMeasurements(JSON.parse(stored));
    } catch (error) {
      console.log(error);
    }
  };

  const openEdit = (item, index) => {
    setSelectedMeasurement({ ...item, index });
    setModalVisible(true);
  };

  const confirmDelete = (index) => {
    Alert.alert(
      "Delete Measurement",
      "Are you sure you want to delete this measurement? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteMeasurement(index),
        },
      ],
    );
  };

  const deleteMeasurement = async (index) => {
    try {
      const updatedMeasurements = [...measurements];
      updatedMeasurements.splice(index, 1);

      await AsyncStorage.setItem(
        "measurements",
        JSON.stringify(updatedMeasurements),
      );

      setMeasurements(updatedMeasurements);

      Alert.alert("Success", "Measurement deleted successfully.");
    } catch (error) {
      Alert.alert("Error", "Failed to delete measurement.");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!modalVisible) {
      loadMeasurements();
    }
  }, [modalVisible]);

  useEffect(() => {
    loadMeasurements();
  }, []);

  return (
    <View className="flex-1 bg-purple-50">
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        className="space-y-4 mt-8"
      >
        {measurements.length === 0 ? (
          <Text className="text-center text-gray-500 mt-8">
            No measurements saved yet.
          </Text>
        ) : (
          measurements.map((item, index) => (
            <View
              key={index}
              className="bg-gray-100 shadow-xl rounded-lg p-4 mb-8"
            >
              <View className="flex-row items-start justify-between">
                <View className="flex-1">
                  <Text className="text-2xl font-extrabold text-purple-700 underline truncate">
                    {item.clientName || "Unnamed Client"}
                    <Text className="text-xs">(Age: {item.age || "N/A"})</Text>
                  </Text>

                  <Text className="text-sm text-gray-400">
                    Date Measured: {item.dateMeasured || "N/A"}
                  </Text>
                </View>

                <View className="flex-row items-center">
                  <Pressable
                    onPress={() => openEdit(item, index)}
                    className="w-10 h-10 bg-green-500 rounded-full items-center justify-center"
                  >
                    <Feather name="edit" size={14} color="#fff" />
                  </Pressable>

                  <Pressable
                    onPress={() => confirmDelete(index)}
                    className="ml-2 w-10 h-10 bg-red-500 rounded-full items-center justify-center"
                  >
                    <Feather name="trash-2" size={14} color="#fff" />
                  </Pressable>
                </View>
              </View>

              <Text className="mt-5 text-lg font-bold text-gray-500">
                Measurement
              </Text>
              <View className="flex flex-row items-center flex-wrap gap-8 justify-evenly mt-2 bg-purple-500 rounded-lg p-4 w-full">
                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.bust || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">Bust</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.waist || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">Waist</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.hip || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">Hip</Text>
                </View>

                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.shoulder || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">Shoulder</Text>
                </View>
                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.sleeveLength || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">
                    Sleeve Length
                  </Text>
                </View>

                <View className="flex flex-col">
                  <Text className="text-xl font-bold text-white">
                    {item.skirtLength || "N/A"} Inches
                  </Text>
                  <Text className="text-white text-lg -mt-1">Skirt Length</Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      <EditModal
        visible={modalVisible}
        setVisible={setModalVisible}
        selectedMeasurement={selectedMeasurement}
        loadMeasurements={loadMeasurements}
      />
    </View>
  );
};

export default Table;
