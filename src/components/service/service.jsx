import React from "react";
import { styles } from "./service.styles";
import { View, Text } from "react-native";
import { Button } from "../button/button";

export default function Service(props) {      // recebendo as props na tela services.jsx
  return (
    <View style={styles.container}>

      <View style={styles.contentText}>
        <Text style={styles.description}>{props.description}</Text>

        <Text style={styles.price}>
          {
            new Intl.NumberFormat('pt-br', 
              {style: 'currency', currency: 'BRL'}  // para formatar as horas
            ).format(props.price)
          }          
        </Text>
      </View>

      <View style={styles.btn}>
        <Button text="Agendar" />
      </View>
      
    </View>
  );
}
