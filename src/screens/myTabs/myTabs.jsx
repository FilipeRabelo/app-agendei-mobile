
// navigation container é o pai de todo mundo, 

import React from 'react';
import Home from '../home/home';
import MyCalendar from '../myCalendar/myCalendar';
import Profile from '../profile/profile';
import icon from '../../constants/icon';
import { Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // estilo q estou trabalhando

const Tab = createBottomTabNavigator();   // instanciando o createBottomTabNavigator

export default function MyTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarShowLabel: false,
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.home}
                style={{
                  width: 35,
                  height: 35,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="MyCalendar"
        component={MyCalendar}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarShowLabel: false,
          unmountOnBlur: true, // para remontar a tela
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.calendar}
                style={{
                  width: 35,
                  height: 35,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => {
            return (
              <Image source={icon.logo} style={{ width: 125, height: 29 }} />
            );
          },
          tabBarShowLabel: false,
          unmountOnBlur: true,

          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={icon.profile}
                style={{
                  width: 35,
                  height: 35,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}