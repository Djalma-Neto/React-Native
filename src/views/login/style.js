import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "50%",
  },
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
  cardLogin:{
    position:"absolute",
    zIndex: "999",
    marginTop: "5pc",
    display: "flex",
    width: "60%",
    maxHeight: "300px",
    minWidth: "200px",
    textAlign: "center",
  },
  title:{
    fontSize: "20px",
    fontFamily: "artigo",
  },
  input:{
    marginVertical: "10px",
    height: "50px",
    backgroundColor: "#e9e9e9",
    borderRadius: "10px",
    paddingLeft: "5px",
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

export default styles;
