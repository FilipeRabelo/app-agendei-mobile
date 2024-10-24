import React, { useEffect, useState } from "react";
import { styles } from "./home.style";
import { Alert, View, Text, FlatList } from "react-native";
import Doctor from "../../components/doctor/doctor.jsx";
import api from "../../constants/api";

export default function Home(props) {

  const [doctors, setDoctors] = useState([]);

  function ClickDoctor(id_doctor, name, specialty, icon){
    props.navigation.navigate("services", {
      id_doctor,
      name,
      specialty,
      icon,
    });
    // console.log(id_doctor, name, specialty, icon);
  }

  async function LoadDoctors(){      // td vez q for executada, ela vai ate o servidor
    try {
      const response = await api.get("/doctors/"); // get na api para listar os medico cadastrados na api

      if (response.data) {
        // dados recebidos da api
        setDoctors(response.data); // jogando para dentro do authContext o obj com os dados
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um Error no login");
      }
    }
  }

  useEffect(() => {         // carregando a tela services
    LoadDoctors()
  }, []);

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
