import React from "react";
import { styles } from "./home.style";
import { View, Text, FlatList } from "react-native";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor.jsx";
import icon from "../../constants/icon.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende seus Serviços</Text>

      <FlatList
        data={doctors}                          // recebemos a lista do servidor - api
        keyExtractor={(doc) => doc.id_doctor}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Doctor
              name={item.name}
              icon={item.icon == "M" ? icon.male : icon.female}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
}

// data={} recebemos a lista do servidor
// de onde vai puxar os dados para carregar a lista - api

// keyExtractor={} com base na listagem de dados qual o campo q vou puxar?

// renderItem={(item) => {}} para renderizar - item para extrair - desestruturação
//  renderItem={({item}) => {
//    return <Text>{item.name}</Text>
//  }}
