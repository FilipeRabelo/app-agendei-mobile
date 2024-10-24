import React, { useContext, useEffect, useState } from "react";
import { styles } from "./profile.styles";
import { Alert, View, Text, Image } from "react-native";

import api from "../../constants/api";
import { Button } from "../../components/button/button";
import { AuthContext } from "../../context/auth";

export default function Profile() {
  const { setUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function LoadProfile() {
    try {
      const response = await api.get("/users/profile"); // get na api

      if (response.data?.name) {
        setName(response.data.name);
        setEmail(response.data.email);
      }
    } catch (error) {
      if (error.response?.data.error) {
        // Alert.alert(error.response.data.error);
        console.log(error.response.data.error);
      } else {
        Alert.alert(
          "Ocorreu um Error ao realizar requisição, Tente mais tarde"
        );
      }
    }
  }

  function Logout() {
    // acessar o context e matar ele kkkkkkkkkk
    api.defaults.headers.common['Authorization'] = "";
    setUser({});
  }

  useEffect(() => {
    LoadProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textH1}>Meu Perfil</Text>
        <View style={styles.item}>
          <Text style={styles.title}>Nome:</Text>
          <Text style={styles.text}>{name}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.title}>E-mail:</Text>
          <Text style={styles.text}>{email}</Text>
        </View>
      </View>
      <View style={styles.btnLogout}>
        <Button text="Desconectar" theme="danger" onPress={Logout} />
      </View>
    </View>
  );
}
