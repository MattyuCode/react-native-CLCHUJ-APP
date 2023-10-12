import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
// import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Components/Home/Home";
import { Navbar } from "./src/Components/Navbar/Navbar";
import Details from "./src/Components/Details/Details";
import Traslate from "./src/Components/Traslate/Traslate";
import { Calendar } from "./src/Components/Calendar/Calendar";
import { Modal } from "./src/Components/Modal/Modal";
import { Login } from "./src/Components/Auth/Login";
import { AuthContext, AuthProvider } from "./src/Components/Context/AuthContext";

export default function App() {
  const Stack = createStackNavigator();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {isLoading, isToken} = useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer
        style={[styles.container, { backgroundColor: "green" }]}
      >
        <Stack.Navigator>
          {isAuthenticated ? (
            <>
              <Stack.Screen name="CLCHUJ" component={Home} />
              <Stack.Screen name="Navbar" component={Navbar} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Traslate" component={Traslate} />
              <Stack.Screen name="Calendar" component={Calendar} />
              <Stack.Screen name="Modal" component={Modal} />
            </>
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a98f7",
    alignItems: "center",
    justifyContent: "center",
  },
});
