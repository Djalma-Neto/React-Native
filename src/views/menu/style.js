import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    margin: 25,
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    textAlign: 'center',
    width: 250,

  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  button: {
    marginVertical:10,
    width:120,
    height:50,
  },
  list: {
    alignContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 100,
    height: 100,
    width: '90%',
    backgroundColor: '#c0c0c0',
  },
});

export default styles;