import React from "react";
import { View, FlatList, Text } from "react-native";
import { styles } from "./myCalendar.style";
import { appointments } from "../../constants/data";
import Appointments from "../../components/appointments/appointments";

export default function MyCalendar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus agendamentos</Text>

      <FlatList
        data={appointments} // recebemos a lista do servidor - api
        keyExtractor={(appoint) => appoint.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointments
              service={item.service}
              doctor={item.doctor}
              specialty={item.specialty}
            />
          );
        }}
      />
    </View>
  );
}
