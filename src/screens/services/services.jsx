import React from "react";
import { styles } from "./services.styles";
import { View, Text, FlatList, Image } from "react-native";
import { doctors_services, doctors } from "../../constants/data";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service";

export default function Services(props) {       // consigo trazer os dados da home

  const id_doctor = props.route.params.id_doctor;
  const name = props.route.params.name;                 // vieram da tela home pelo router
  const specialty = props.route.params.specialty;
  const iconDoctor = props.route.params.iconDoctor;


  function CLickServices(id_service) {
    props.navigation.navigate('schedule');
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={iconDoctor === "M" ? icon.male : icon.female} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.specialty}>{specialty}</Text>
      </View>

      <FlatList
        style={styles.flatList}
        data={doctors_services} // recebemos a lista do servidor - api
        keyExtractor={(serv) => serv.id_service} // para extrair o campo key
        showsVerticalScrollIndicator={false} // barra de rolagem vertical lateral
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
