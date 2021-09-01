import React from "react";
import { View, Image } from "react-native";
import styles from "./style.js";

const imageBack = (props) => {
  return (
    <View style={props.style}>
      <Image
        source={require("../../../assets/loginScreen.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.children}>
        {props.children}
      </View>
    </View>
  );
};

export default imageBack;
