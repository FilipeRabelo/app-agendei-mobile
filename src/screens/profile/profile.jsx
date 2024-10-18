import React from "react";
import { styles } from './profile.styles';
import { View, Text, Image } from "react-native";

import icon from '../../constants/icon'

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textH1}>Meu Perfil</Text>
        <View style={styles.item}>
          <Text style={styles.title}>Nome:</Text>
          <Text style={styles.text}>Filipe Rabelo</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.title}>E-mail:</Text>
          <Text style={styles.text}>filipe.teste@gmail.com</Text>
        </View>
      </View>
    </View>
  );
}