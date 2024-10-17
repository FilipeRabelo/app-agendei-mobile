import React from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./doctor.style";

// ele vai receber varias informações do medico, então preciso passar um props para o component
export default function Doctor(props) {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Image source={props.icon} style={styles.img} />

        <View style={styles.viewText}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.specialty}>{props.specialty}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
