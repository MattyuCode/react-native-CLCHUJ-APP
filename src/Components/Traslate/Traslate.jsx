import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import numerosChuj from "../Service/DB.json";

function Traslate() {
  const [inputText, setInputText] = useState("");
  const [submitButton, setSubmitButton] = useState("");
  const [numeros, setNumeros] = useState([]);
  //   console.log(numerosChuj["B'islab'_Chuj");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("http://localhost:3434/api/numerosChuj");
        const response = await fetch(
          "https://api-clchuj.onrender.com/api/numerosChuj"
        );
        const data = await response.json();
        console.table(data);
        setNumeros(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    setSubmitButton(inputText);
  };

  const mostrarNumeros = () => {
    if (numeros && numeros.datos) {
      // console.log(numeros.datos);
      // const id = 3;
      // const tralado = numeros.datos.find((item) => item.id_numeros === id);
      const id = parseInt(submitButton);
      const tralado = numeros.datos.find((item) => item.id_numeros === id);
      // const tralado = numerosChuj["B'islab'_Chuj"].find((item) => item.id === id);
      // console.log(tralado.name);
      return tralado ? tralado.name : "Número no encontrado";
    }
  };

  // const verJson = async () => {
  //   try {
  //     const response = await fetch('../Service/DB.json');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     console.log(data);

  //   } catch (error) {
  //     console.error('Error fetching the JSON data:', error);
  //   }
  // };
  // verJson();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          value={inputText}
          onChangeText={(value) => setInputText(value)}
          placeholder="Ingrese un numero para traducir"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Traducir números</Text>
        </TouchableOpacity>
        {/* <Text style={styles.textoAbajo}>{submitButton}</Text> */}
        {submitButton ? (
          <Text style={styles.textoAbajo}>📝📖👉: {mostrarNumeros()}</Text>
        ) : null}
      </View>

      <View>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          value={inputText}
          onChangeText={(value) => setInputText(value)}
          placeholder="Ingrese un numero para traducir"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Traducir palabras</Text>
        </TouchableOpacity>
        {/* <Text style={styles.textoAbajo}>{submitButton}</Text> */}
        {submitButton ? (
          <Text style={styles.textoAbajo}>📝📖👉: {mostrarNumeros()}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 10,
    borderRadius: 8,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoAbajo: {
    marginTop: 20,
    fontSize: 20,
    color: "#555",
  },
});

export default Traslate;
