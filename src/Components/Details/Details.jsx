import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos en la</Text>
      <Text>Comunidad Lingüistica Chuj</Text>
      {/* <Image
        source={{
          uri: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        }}
        
        style={styles.imagen}
      /> */}
       <Image source={require("./../../../assets/clchuj.jpg")} style={styles.imagen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100
  },
});

export default Details;
