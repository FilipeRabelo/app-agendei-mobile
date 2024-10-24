import React, { useEffect, useState } from "react";
import { Alert, View, FlatList, Text } from "react-native";
import { styles } from "./myCalendar.style";
import Appointments from "../../components/appointments/appointments";
import api from "../../constants/api";

export default function MyCalendar() {
  const [appointments, setAppointments] = useState([]);

  async function LoadAppointments() {
    try {
      const response = await api.get("/appointments"); // get na api

      if (response.data) {
        setAppointments(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) {
        // Alert.alert(error.response.data.error);
        console.log(error.response.data.error);
      } else {
        Alert.alert(
          "Ocorreu um Error ao realizar requisição, Tente mais tarde"
        );
      }
    }
  }

  async function DeleteAppointment(id_appointment) {
    try {
      const response = await api.delete("/appointments/" + id_appointment); // get na api

      if (response.data?.id_appointment) {
        LoadAppointments();
      }
    } catch (error) {
      if (error.response?.data.error) {
        // Alert.alert(error.response.data.error);
        console.log(error.response.data.error);
      } else {
        Alert.alert(
          "Ocorreu um Error ao realizar requisição, Tente mais tarde"
        );
      }
    }
  }

  useEffect(() => {
    LoadAppointments();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meus Agendamentos</Text>

      <FlatList
        data={appointments} // recebemos a lista do servidor - api
        keyExtractor={(appoint) => appoint.id_appointment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Appointments
              id_appointment={item.id_appointment}
              doctor={item.doctor}
              service={item.service}
              specialty={item.specialty}
              bookingDate={item.booking_date}
              bookingHour={item.booking_hour}
              onPress={DeleteAppointment}
            />
          );
        }}
      />
    </View>
  );
}
