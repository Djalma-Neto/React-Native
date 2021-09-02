import React, {useState} from "react";
import {
  ScrollView,
  Dialog,
  Portal,
  TouchableOpacity,
  Text
} from "react-native";
import ImageBack from "../views/default/imageBack";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./style";

import Avatar from "../../components/views/user/avatar";

const Menu = ({ navigation }) => {
  // const [open, setOpen] = useState(false);

  const logOut = () => {
    navigation.navigate("Login");
  };
  const hideDialog = () =>{useState(false)}
  const openDialog = () =>{useState(true)}

  return (
    <ImageBack style={styles.screen}>
      <ScrollView>
        <Avatar userName="User" userEmail="user@user.com" />
        {/* ..................................... */}

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon style={styles.icon} name="home" />
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>

        {/* ..................................... */}

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            openDialog;
          }}
        >
          <Icon style={styles.icon} name="sign-out-alt" />
          <Text style={styles.title}>Sair</Text>
        </TouchableOpacity>

        {/* ..................................... */}
        {/* <Portal>
          <Dialog visible={open} onDismiss={hideDialog}>
            <Dialog.Title>Deslogar</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Deseja realmente deslogar?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  setdialogOpen(false);
                }}
              >
                Sim
              </Button>
              <Button onPress={logOut}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal> */}
      </ScrollView>
    </ImageBack>
  );
};

export default Menu;
