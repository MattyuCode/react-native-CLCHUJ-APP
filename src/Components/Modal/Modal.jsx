import { useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

export const Modal = ({ route }) => {
  const { monthName } = route.params;
  //   const [isModalVisible, setModalVisible] = useState(false);

//NOTE: DATOS PARA USARLO EN EL CALENDARIO | Y NO OLVIDAR AGREGAR ALFABETO CON UNAS DIEZ PALABRAS DE CADA UNO
/*
  const fecth = async () => {
    const response = await fetch(
      "https://api-clchuj.onrender.com/api/storage/"
    );
    const data = await response.json();
    const nombre = 'Septiembre'
    //console.log(data.datos);
    const de = data.datos.find(item => item.name === nombre);
    console.log(de.images[2]);
  };
  fecth();
*/

  const monthImages = {
    //NOTE: AGREGAR MAS DATOS DE LOS MESES
    Enero: require("../../../assets/clchuj.jpg"),
    Febrero: { uri: "https://annymatt34.web.app/img/10.jpg" },
    Julio: require("../../../assets/julio.jpg"),
    // Septiembre: require("../../../assets/Septiembre.jpg"),
    Septiembre: {
      uri: "https://api-clchuj.onrender.com/Storage/1690774869972.jpg",
    },
  };

  const monthImage = monthImages[monthName];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{monthName}</Text>
      <Image source={monthImage} style={styles.imagen} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
    color: "#05633E",
    marginTop: 10,
  },
  imagen: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 40,
      marginTop: 20,
  },
});
