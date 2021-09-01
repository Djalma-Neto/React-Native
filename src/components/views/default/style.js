import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  children: {
    width: "100%",
    position: "absolute",
  },
});

export default styles;
