import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";

const Avatar = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.slostImage}>
        <Image
          source={require("../../../assets/user.png")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.slotContent}>
        <Text style={styles.slotContent}>{props.userName}</Text>
        <Text style={styles.slotContent}>{props.userEmail}</Text>
      </View>
    </View>
  );
};

export default Avatar;
