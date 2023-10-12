import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 660,
          color: "#006095",
          marginBottom: 35,
        }}
      >
        LOGIN
      </Text>
      <TextInput
        style={[styles.input, { marginBottom: 40 }]}
        value={user}
        onChangeText={(value) => setUser(value)}
        placeholder="Usuario"
      />
      <TextInput
        style={[styles.input, { marginBottom: 45 }]}
        value={password}
        onChangeText={(value) => setPassword(value)}
        placeholder="Contraseña"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //BUG: Llamando la funcion para iniciar session
          login(user, password);
        }}
      >
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    // marginBottom: 10,
    borderRadius: 8,
    fontSize: 20,
    // color: "#bfbfbfdb",
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    height: 60,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
