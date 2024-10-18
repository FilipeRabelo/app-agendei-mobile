import React from "react";
import { styles } from "./services.styles";
import { View, Text, FlatList, Image } from "react-native";
import { doctors_services, doctors } from "../../constants/data";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service";

export default function Services() {
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon.female}/>
        <Text style={styles.name}>Filipe</Text>
        <Text style={styles.specialty}>Cardiologista</Text>
      </View>

      <FlatList
        style={styles.flatList}
        data={doctors_services}                         // recebemos a lista do servidor - api
        keyExtractor={(serv) => serv.id_service}        // para extrair o campo key
        showsVerticalScrollIndicator={false}            // barra de rolagem vertical lateral
        
        renderItem={({ item }) => {
          return (
            <Service 
              description={item.description} 
              price={item.price}
            />
          )
        }}
      />
      
    </View>
  );
}
