// calendar
// https://github.com/wix/react-native-calendars
// npm install react-native-calendars

import React from 'react';
import {styles} from './schedule.styles';
import { View, Text } from "react-native";

export default function Schedule(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Tela schedule</Text>
    </View>
  )
}