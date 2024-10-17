import React from "react";
import { styles } from "./appointments.styles";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icon from "../../constants/icon";
import { Button } from "../button/button";

export default function Appointments(props) {
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
            <Text style={styles.textCalendar}>16/10/2024</Text>
          </View>

          <View style={styles.time}>
            <Image source={icon.clock} style={styles.icon} />
            <Text style={styles.textTime}>21:30h</Text>
          </View>
        </View>

        <View style={styles.contentBtn}>
          <Button text={"Cancelar Reserva"} theme={'danger'}/>
        </View>
      </View>
    </View>
  );
}
