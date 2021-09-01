import React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

import ImageBack from "../../components/views/default/imageBack";

const Login = () => {
  const navigation = useNavigation();

  const image = { src: "../../assets/loginScreen.png" };
  return (
    <ImageBack style={styles.screen}>
      <View style={styles.screen}>
        <View style={styles.cardLogin}>
          <Icon name="user" size={70} />
          {/* <Text style={styles.title}>LOGIN</Text> */}
          <TextInput
            style={styles.input}
            secureTextEntry={false}
            placeholder="LOGIN"
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="PASSWORD"
          ></TextInput>
          <Button
            title="Entrar"
            color="#272cd6"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </ImageBack>
  );
};

export default Login;
