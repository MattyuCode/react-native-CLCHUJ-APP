import React, { useContext, useEffect } from "react";
import {
  Button,
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";

import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleAgregarPress = () => {
    Alert.alert("Agregado", "Se ha agregado algo.");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/*NOTE: PARA LA PANTALLA PRINCIPAL */}
        <Text style={styles.Txt1}>Bienvenidos</Text>
        <Text style={[styles.Txt, { paddingBottom: 15 }]}>Wach' Jahub'al</Text>
        <Text style={styles.Txt1}>Comunidad Lingüistica Chuj</Text>
        <Text style={styles.Txt}>Smakb'enal Ti' Chonhab' Chuj</Text>
        <Image
          source={require("./../../../assets/clchuj.jpg")}
          style={styles.imagen}
        />
      </View>

      <View
        style={{
          //   padding: 2,
          width: "100%",
          //   backgroundColor: "#3333",
          //   flex: 1,
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={[styles.boton, { backgroundColor: "#4a98f7" }]}
          onPress={() => navigation.navigate("Traslate")}
        >
          <MaterialIcon
            name="g-translate"
            color="white"
            style={[styles.icono, { fontSize: 20 }]}
          />
          <Text style={styles.botonText}>Traductor</Text>
        </TouchableOpacity>
        {/* <Navbar /> */}

        {/* <Button
          style={{
            paddingTop: Platform.OS === "android" && 30,
            padding: 20,
            width: "50%",
          }}
          //   buttonStyle={styles.buttonStyle}
          //   titleStyle={styles.buttonTitle}
          title="Traducir números en Chuj"
          onPress={() => navigation.navigate("Navbar")}
        /> */}

        <TouchableOpacity
          style={[styles.boton, { backgroundColor: "#C8750A" }]}
          onPress={() => navigation.navigate("nahual")}
        >
          <Ionicons
            name="calendar"
            color="white"
            style={[styles.icono, { fontSize: 20 }]}
          />
          <Text style={styles.botonText}>Calcular Nahual</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boton, { backgroundColor: "#0AC87A" }]}
          onPress={() => navigation.navigate("Diccionario_Chuj")}
        >
          <Icon
            name="tasks"
            color="white"
            style={[styles.icono, { fontSize: 20 }]}
          />
          <Text style={styles.botonText}>Diccionario</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        {/* //BOTON DE CERRAR */}
        <TouchableOpacity style={styles.log_out} onPress={() => logout()}>
          {/* <Icon
            name="tasks"
            color="white"
            style={[styles.icono, { fontSize: 20 }]}
          /> */}
          <Feather
            name="log-out"
            size={24}
            color="white"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.botonText}>Cerrar Sessión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 70,
    // backgroundColor: "#3333",
  },
  boton: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 5,
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  log_out: {
    backgroundColor: "#009baa",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  botonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  icono: {
    fontSize: 12,
    marginRight: 5,
  },
  imagen: {
    width: 200,
    height: 200,
    marginTop: 30,
    borderRadius: 100,
  },
  Txt: {
    fontSize: 25,
    fontWeight: "600",
    color: "#05633E",
  },
  Txt1: {
    fontSize: 20,
    // fontWeight: "600"
    color: "#05633E",
  },
  botonTraducir: {
    width: 20,
  },
  buttonStyle: {
    backgroundColor: "green", // Color de fondo del botón
    marginVertical: 10, // Espaciado vertical alrededor del botón
    borderRadius: 5,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
