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
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [user, setUser] = useState([]);
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-clchuj.onrender.com/api/users"
        );
        const data = await response.json();
        // console.log(data.users);
        setUser(data.users);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    if (
      user.find(
        (item) => item.user === inputText && item.password === inputText1
      )
    ) {
      console.log("Si es correceto");
      // navigation.navigate("CLCHUJ");
      window.location.href = "/";
      // localStorage.setItem("NO_CIA", data.no_cia);
      localStorage.setItem("token", "Mattyu's");
    } else {
      alert("😮  DATOS INCORRECTOS 😪😪");
      console.log("no es correcto");
    }
  };

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
        value={inputText}
        onChangeText={(value) => setInputText(value)}
        placeholder="Usuario"
      />
      <TextInput
        style={[styles.input, { marginBottom: 45 }]}
        onChangeText={(value) => setInputText1(value)}
        value={inputText1}
        placeholder="Contraseña"
      />

      <TouchableOpacity style={styles.button} onPress={() => login()}>
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
