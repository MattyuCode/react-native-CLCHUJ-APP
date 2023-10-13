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
import { API_Services } from "../../Config/env";

function Traslate() {
  const [inputText, setInputText] = useState("");
  const [submitButton, setSubmitButton] = useState("");
  const [numeros, setNumeros] = useState([]);

  const [inputText2, setInputText2] = useState("");
  const [mostrarPalabras, setMostrarPalabras] = useState("");
  const [palabras, setPalabras] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(`${API_Services}/numerosChuj`);
        const data1 = await response1.json();
        setNumeros(data1);

        const response2 = await fetch(`${API_Services}/palabrasChuj`);
        const data2 = await response2.json();
        setPalabras(data2);
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

  const handleClickPalabras = () => {
    setMostrarPalabras(inputText2);
  };

  const mostrarPalabra = () => {
    if (palabras && palabras.datos) {
      const tralado = palabras.datos.find(
        (item) => item.nombrePalabra === mostrarPalabras
      );
      return tralado ? tralado.traduccionPalabra : "Palabra no encontrado";
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
          keyboardType="number-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Traducir números</Text>
        </TouchableOpacity>
        {/* <Text style={styles.textoAbajo}>{submitButton}</Text> */}
        {submitButton ? (
          <Text style={styles.textoAbajo}>📝📖👉: {mostrarNumeros()}</Text>
        ) : null}
      </View>

      <View style={{ marginTop: 80 }}>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          value={inputText2}
          onChangeText={(value) => setInputText2(value)}
          placeholder="Ingresa alguna palabra"
        />
        <TouchableOpacity style={styles.button} onPress={handleClickPalabras}>
          <Text style={styles.buttonText}>Traducir palabras</Text>
        </TouchableOpacity>

        {mostrarPalabras ? (
          <Text style={styles.textoAbajo}>📝📖👉: {mostrarPalabra()}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "#0000",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginLeft: 25,
    marginRight: 25,
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textoAbajo: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Traslate;
