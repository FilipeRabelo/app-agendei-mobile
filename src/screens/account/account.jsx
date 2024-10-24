import React, { useState } from "react";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import { Button } from "../../components/button/button";
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import api from "../../constants/api.js";

export default function Account(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin() {
    try {
      // console.log("Dados sendo enviados:", { name, email, password }); // Verificação prévia

      const response = await api.post("/users/register", {
        name,
        email,
        password,
      });

      if (response.data) {
        console.log(response.data);
        props.navigation.navigate("login");
      }
    } catch (error) {

      if (error.response?.data.error) {
        Alert.alert(error.response.data.error);
      } else {
        Alert.alert("Ocorreu um Error no login");
      }
    }

    
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.textUser}>Cadastrar Usuário</Text>
        <TextInput
          placeholder="Nome:"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="E-mail:"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha:"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button text="Cadastrar Usuário" onPress={ExecuteLogin} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tenho conta! </Text>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.footerLink}>Fazer Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
