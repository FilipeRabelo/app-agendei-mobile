
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

export function Button(props){

  function TesteClick(){
    Alert.alert("clicou no btn");
  }

  return (
    <TouchableOpacity onPress={TesteClick} style={styles.btn}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}