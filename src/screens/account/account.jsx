import React from "react";
import icon from "../../constants/icon";
import { styles } from "./account.style";
import { Button } from "../../components/button/button";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function Account() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <Text style={styles.textUser}>Cadastrar Usuário</Text>
        <TextInput placeholder="Nome:" style={styles.input} />
        <TextInput placeholder="E-mail:" style={styles.input} />

        <TextInput
          placeholder="Senha:"
          style={styles.input}
          secureTextEntry={true}
        />

        <Button text="Acessar" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tenho conta! </Text>

        <TouchableOpacity>
          <Text style={styles.footerLink}>Fazer Login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
