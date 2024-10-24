import React, { useEffect, useState } from "react";
import { styles } from "./services.styles";
import {Alert, View, Text, FlatList, Image } from "react-native";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service";
import api from "../../constants/api";
// import { AuthContext } from "../../context/auth";

export default function Services(props) {
  // consigo trazer os dados da home

  const id_doctor = props.route.params.id_doctor;
  const name = props.route.params.name; // vieram da tela home pelo router
  const specialty = props.route.params.specialty;
  const iconDoctor = props.route.params.icon;

  const [doctorsServices, setDoctorsServices] = useState([]); // lista de serviços

  function CLickServices(id_service) {
    props.navigation.navigate("schedule", {
      id_doctor, // passando p a tela de agendamento
      id_service,
    });
  }

  async function LoadServices() {
    try {
      const response = await api.get("/doctors/" + id_doctor + "/services"); // get na api

      if (response.data) {
        // dados recebidos da api
        setDoctorsServices(response.data); // jogando para dentro do authContext o obj com os dados - id_user, name etc
      }
    } catch (error) {
      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um Error no login");
      }
    }
  }

  useEffect(() => {         // qndo a tela abre ele executa a funcao
    LoadServices();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === "M" ? icon.male : icon.female} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        data={doctorsServices} // recebemos a lista do servidor - api
        keyExtractor={(serv) => serv.id_service} // para extrair o campo key
        showsVerticalScrollIndicator={false} // barra de rolagem vertical lateral
        style={styles.flatList}
        renderItem={({ item }) => {
          return (
            <Service
              id_service={item.id_service}
              description={item.description}
              price={item.price}
              onPress={CLickServices}
            />
          );
        }}
      />
    </View>
  );
}
