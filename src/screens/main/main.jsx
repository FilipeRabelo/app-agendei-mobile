
// navigation container é o pai de todo mundo, 

import React from 'react';
import Home from '../home/home';
import MyCalendar from '../myCalendar/myCalendar';
import Profile from '../profile/profile';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // estilo q estou trabalhando

const Tab = createBottomTabNavigator();   // instanciando o createBottomTabNavigator

export default function Main(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"       component={Home} />
        <Tab.Screen name="MyCalendar" component={MyCalendar} />
        <Tab.Screen name="Profile"    component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}