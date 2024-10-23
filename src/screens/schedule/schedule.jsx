import React, { useState } from "react";
import { styles } from "./schedule.styles";
import { View, Text } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import { ptBR } from "../../constants/calendar";
import { Button } from "../../components/button/button";
// import { IosModalPicker } from "../../components/isoModalPicker/iosModalPicker";

LocaleConfig.locales["pt-br"] = ptBR; // importando minha configuração
LocaleConfig.defaultLocale = "pt-br"; // usar por default o meu arquivo em pt-br

export default function Schedule(props) {
  const id_doctor = props.route.params.id_doctor;
  const id_service = props.route.params.id_service;

  const [selectedHour, setSelectedHour] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  ); // new Date().toISOString().slice(0, 10) - para trazer a data de hoje ja selecionada e formatada

  function CLickBooking() {
    console.log(id_doctor, id_service, selectedDate, selectedHour);
  }

  return (
    <View style={styles.container}>

      <View>
        <Calendar
          theme={styles.theme}
          onDayPress={(day) => {
            setSelectedDate(day.dateString); // passando para a variavel selected
          }}
          // para informar qual dia quero marcar em form de objeto
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
            },
          }}
          minDate={new Date().toDateString()} // instanciando uma nova data e pegando a data de hoje
        />

        <View style={styles.viewTextHour}>
          <Text style={styles.textHour}>Horário</Text>
        </View>

        <View style={styles.contentPicker}>
          <Picker
            selectedValue={selectedHour} // valor padrão q traz
            onValueChange={(itemValue, itemIndex) => {
              setSelectedHour(itemValue);
            }} // onValueChange=toda vez q mudar o valor ele chama setSelectedHour() p mudar o valor
            style={styles.picker} // Aplicando os estilos aqui
          >
            <Picker.Item label="09:00" value={"09:00"} />
            <Picker.Item label="09:30" value={"09:30"} />
            <Picker.Item label="10:00" value={"10:00"} />
            <Picker.Item label="10:30" value={"10:30"} />
            <Picker.Item label="11:00" value={"11:00"} />
          </Picker>
        </View>
      </View>

      <View>
        <Button text={"Confirmar Reserva"} onPress={CLickBooking} />
      </View>
      
    </View>
  );
}

// picker
// https://github.com/react-native-picker/picker

// calendar
// https://github.com/wix/react-native-calendars
