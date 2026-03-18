import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditModal = ({
  visible,
  setVisible,
  selectedMeasurement,
  loadMeasurements,
}) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (selectedMeasurement) {
      setForm(selectedMeasurement);
    }
  }, [selectedMeasurement]);

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const updateMeasurement = async () => {
    try {
      if (!form.clientName || !form.age) {
        Alert.alert("Error", "Client name and age are required.");
        return;
      }

      const stored = await AsyncStorage.getItem("measurements");
      let data = stored ? JSON.parse(stored) : [];

      data[form.index] = form;

      await AsyncStorage.setItem("measurements", JSON.stringify(data));

      Alert.alert("Success", "Measurement updated successfully");

      setVisible(false);
      loadMeasurements();
    } catch (error) {
      Alert.alert("Error", "Failed to update measurement");
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="bg-white w-11/12 rounded-xl p-5 max-h-[90%]">
          <Text className="text-2xl font-bold text-purple-700 mb-4">
            Edit Measurement
          </Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="font-semibold text-gray-700 mb-1">
              Client Name
            </Text>
            <TextInput
              value={form.clientName}
              onChangeText={(v) => updateField("clientName", v)}
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">Age</Text>
            <TextInput
              value={form.age}
              onChangeText={(v) => updateField("age", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Bust (Inches)
            </Text>
            <TextInput
              value={form.bust}
              onChangeText={(v) => updateField("bust", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Waist (Inches)
            </Text>
            <TextInput
              value={form.waist}
              onChangeText={(v) => updateField("waist", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Hip (Inches)
            </Text>
            <TextInput
              value={form.hip}
              onChangeText={(v) => updateField("hip", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Shoulder (Inches)
            </Text>
            <TextInput
              value={form.shoulder}
              onChangeText={(v) => updateField("shoulder", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Sleeve Length (Inches)
            </Text>
            <TextInput
              value={form.sleeveLength}
              onChangeText={(v) => updateField("sleeveLength", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-3"
            />

            <Text className="font-semibold text-gray-700 mb-1">
              Skirt Length (Inches)
            </Text>
            <TextInput
              value={form.skirtLength}
              onChangeText={(v) => updateField("skirtLength", v)}
              keyboardType="numeric"
              className="border border-gray-300 rounded-lg p-3 mb-5"
            />

            <View className="flex-row justify-between">
              <Pressable
                onPress={() => setVisible(false)}
                className="bg-gray-400 px-5 py-3 rounded-lg"
              >
                <Text className="text-white font-semibold">Cancel</Text>
              </Pressable>

              <Pressable
                onPress={updateMeasurement}
                className="bg-purple-600 px-5 py-3 rounded-lg"
              >
                <Text className="text-white font-semibold">Update</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
