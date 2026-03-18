import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MeasurementModal = ({ onSaveSuccess }) => {
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    clientName: "",
    age: "",
    dateMeasured: "",
    bust: "",
    waist: "",
    hip: "",
    shoulder: "",
    sleeveLength: "",
    skirtLength: "",
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const saveMeasurement = async () => {
    // Validation
    const requiredFields = [
      "clientName",
      "dateMeasured",
      "bust",
      "waist",
      "hip",
      "shoulder",
      "sleeveLength",
      "skirtLength",
    ];

    for (let field of requiredFields) {
      if (!form[field].trim()) {
        Alert.alert("Error", `Please fill in the ${field} field.`);
        return;
      }
    }

    try {
      const existing = await AsyncStorage.getItem("measurements");
      const parsed = existing ? JSON.parse(existing) : [];
      const updated = [...parsed, form];

      await AsyncStorage.setItem("measurements", JSON.stringify(updated));

      setVisible(false);
      setForm({
        clientName: "",
        age: "",
        dateMeasured: "",
        bust: "",
        waist: "",
        hip: "",
        shoulder: "",
        sleeveLength: "",
        skirtLength: "",
      });

      Alert.alert("Success", "Measurement saved successfully!");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to save measurement.");
    }
  };

  const InputField = ({ label, value, onChangeText, containerClassName }) => (
    <View className={`mb-3 ${containerClassName || ""}`}>
      <Text className="mb-1">{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className="border border-gray-300 bg-white rounded-md px-3 py-2"
      />
    </View>
  );

  return (
    <View>
      <View className="items-end ">
        <Pressable
          onPress={() => setVisible(true)}
          className="bg-purple-600 px-4 py-2 rounded-lg w-64"
        >
          <Text className="text-white text-center">Open Measurement Form</Text>
        </Pressable>
      </View>

      <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center px-2">
          <View className="bg-purple-50 w-11/12 max-h-[80%] p-4 rounded-xl px-8">
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text className="text-xl font-bold mb-4 text-center">
                Client Information
              </Text>

              <InputField
                label="Client Name"
                value={form.clientName}
                onChangeText={(v) => handleChange("clientName", v)}
              />

              <View className="flex-row w-full gap-2">
                <InputField
                  label="Age (optional)"
                  containerClassName="flex-1"
                  value={form.age}
                  onChangeText={(v) => handleChange("age", v)}
                />
                <InputField
                  label="Date Measured"
                  containerClassName="flex-1"
                  value={form.dateMeasured}
                  onChangeText={(v) => handleChange("dateMeasured", v)}
                />
              </View>

              <Text className="text-xl font-bold mt-4 mb-4 text-center">
                Measurements
              </Text>

              <View className="flex-row w-full gap-2">
                <InputField
                  label="Bust"
                  containerClassName="flex-1"
                  value={form.bust}
                  onChangeText={(v) => handleChange("bust", v)}
                />
                <InputField
                  label="Waist"
                  containerClassName="flex-1"
                  value={form.waist}
                  onChangeText={(v) => handleChange("waist", v)}
                />
              </View>

              <View className="flex-row w-full gap-2">
                <InputField
                  label="Hip"
                  containerClassName="flex-1"
                  value={form.hip}
                  onChangeText={(v) => handleChange("hip", v)}
                />
                <InputField
                  label="Shoulder"
                  containerClassName="flex-1"
                  value={form.shoulder}
                  onChangeText={(v) => handleChange("shoulder", v)}
                />
              </View>

              <View className="flex-row w-full gap-2">
                <InputField
                  label="Sleeve Length"
                  containerClassName="flex-1"
                  value={form.sleeveLength}
                  onChangeText={(v) => handleChange("sleeveLength", v)}
                />
                <InputField
                  label="Skirt Length"
                  containerClassName="flex-1"
                  value={form.skirtLength}
                  onChangeText={(v) => handleChange("skirtLength", v)}
                />
              </View>

              <View className="flex-row justify-center w-full gap-4 mt-4">
                <Pressable
                  onPress={saveMeasurement}
                  className="bg-green-500 py-3 px-8 rounded-lg"
                >
                  <Text className="text-white text-center font-bold">Save</Text>
                </Pressable>
                <Pressable
                  onPress={() => setVisible(false)}
                  className="bg-red-500 py-3 px-8 rounded-lg"
                >
                  <Text className="text-white text-center">Close</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MeasurementModal;
