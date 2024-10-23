import React from "react";
import { styles } from "./home.style";
import { View, Text, FlatList } from "react-native";
import { doctors } from "../../constants/data";
import Doctor from "../../components/doctor/doctor.jsx";

export default function Home(props) {

  function ClickDoctor(id_doctor, name, specialty, icon){
    props.navigation.navigate("services", {
      id_doctor,
      name,
      specialty,
      icon,
    });
    console.log(id_doctor, name, specialty, icon);
  }

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
              id_doctor={item.id_doctor}
              name={item.name}
              specialty={item.specialty}
              icon={item.icon}                // M ou F
              onPress={ClickDoctor}
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
