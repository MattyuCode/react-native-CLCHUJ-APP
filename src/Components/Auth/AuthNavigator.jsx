import React, { useContext } from "react";
import "react-native-gesture-handler";
import Home from "../Home/Home";
import Details from "../Details/Details";
import Traslate from "../Traslate/Traslate";
import { Login } from "./Login";
import { Register } from "./Register";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../Context/AuthContext";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Nahual from "../Nahual/Nahual";

const AuthNavigator = () => {
  const Stack = createStackNavigator();
  const { isLoading, isToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isToken !== null ? (
          <>
            <Stack.Screen name="CLCHUJ" component={Home} />
            <Stack.Screen name="Diccionario_Chuj" component={Details} />
            <Stack.Screen name="Traslate" component={Traslate} />
            <Stack.Screen name="nahual" component={Nahual} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="signup" component={Register} />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style={"dark"} />
    </NavigationContainer>
  );
};

export default AuthNavigator;
