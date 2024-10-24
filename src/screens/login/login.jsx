import React, { useContext, useState } from "react";
import icon from "../../constants/icon";
import { styles } from "./login.style";
import { Button } from "../../components/button/button";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import api from '../../constants/api'

import { AuthContext } from "../../context/auth";

export default function Login(props) {

  const { setUser } = useContext(AuthContext);   // importando a função setUser do authContext

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin(){
    try{
      const response = await api.post("/users/login", {
        email,
        password,
      });

      if (response.data) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        setUser(response.data);   // jogando para dentro do authContext o obj com os dados - id_user, name etc
      }

    }catch(error){
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

        <Button text="Acessar" onPress={ExecuteLogin} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tenho conta. </Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("account")}>
          <Text style={styles.footerLink}>Criar conta agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
