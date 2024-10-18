import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export const IosModalPicker = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View>
      {/* Simulando um Picker com TouchableOpacity */}
      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={{ padding: 10, borderWidth: 1, borderColor: "#ccc" }}
      >
        <Text>{selectedValue}</Text>
      </TouchableOpacity>

      {/* Picker modal para iOS */}
      {Platform.OS === "ios" && (
        <Modal visible={showPicker} transparent={true} animationType="slide">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                margin: 20,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => {
                  setSelectedValue(itemValue);
                  setShowPicker(false); // Fecha o modal após a seleção
                }}
              >
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
              <Button title="Done" onPress={() => setShowPicker(false)} />
            </View>
          </View>
        </Modal>
      )}

      {/* Picker padrão para Android */}
      {Platform.OS === "android" && (
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      )}
    </View>
  );
};
