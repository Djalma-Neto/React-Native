import React, {useState} from "react";
import styles from "./src/style";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";


// const Drawer = createDrawerNavigator()

import Login from "./src/views/login/login";
import Home from "./src/views/home/home";
import Avatar from "./src/components/views/user/avatar";
import MenuContent from "./src/components/menu/menu";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={MenuContent}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            drawerLabel: "Home",
            drawerIcon: ({ focused, size }) => (
              <Icon name="home" size={size} color={focused ? "#7cc" : "#ccc"} />
            ),
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerLabel: "Sair",
            headerShown: false,
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="sign-out-alt"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

// navigation.openDrawer();
// navigation.closeDrawer();
// navigation.toggleDrawer();
