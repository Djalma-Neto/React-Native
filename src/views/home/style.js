import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
  },
  screen: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  lista: {
    width: "90%",
    minWidth: "150px",
    borderRadius: "10px",
    height: "100px",
    padding: "10px",
    backgroundColor: "#dfdfdf",
  },
  itemList:{
    fontSize: "15px",
    marginTop: "5px",
    padding: "5px",
    backgroundColor: "#cacaca",
    borderRadius:"5px",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    minWidth: "150px",
    marginVertical: "10px",
    fontSize: "20px",
    fontFamily: "artigo",
  },
  input: {
    marginVertical: "10px",
    height: "50px",
    backgroundColor: "#e9e9e9",
    borderRadius: "10px",
    paddingLeft: "5px",
  },
});

export default styles;
