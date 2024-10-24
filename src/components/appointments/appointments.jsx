import React from "react";
import { styles } from "./appointments.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icon from "../../constants/icon";
import { Button } from "../button/button";

export default function Appointments(props) {
  //2024-11-15T08:00:00
  const dt = new Date(props.bookingDate + "T" + props.bookingHour);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {props.service} - {props.doctor}
      </Text>

      <Text style={styles.specialty}>{props.specialty}</Text>

      <View style={styles.content}>
        <View style={styles.contentData}>
          <View style={styles.calendar}>
            <Image source={icon.calendar} style={styles.icon} />
            <Text style={styles.textCalendar}>{dt.toLocaleDateString()}</Text>
          </View>

          <View style={styles.time}>
            <Image source={icon.clock} style={styles.icon} />
            <Text style={styles.textTime}>
              {dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} hs
              </Text>
          </View>
        </View>

        <View style={styles.contentBtn}>
          <Button
            text={"Cancelar Reserva"}
            theme={"danger"}
            onPress={() => props.onPress(props.id_appointment)}
          />
        </View>
      </View>
    </View>
  );
}
