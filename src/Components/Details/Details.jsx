import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const Details = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Image
        source={{
          uri: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        }}
        
        style={styles.imagen}
      /> */}
        <Image
          source={require("./../../../assets/A.jpg")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/b.jpg")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c1.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c2.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c4.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c5.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c6.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c7.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c8.png")}
          style={styles.imagen}
        />
        <Image
          source={require("./../../../assets/c8.png")}
          style={styles.imagen}
        />
         
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  imagen: {
    width: "100%",
    height: 900,
    marginTop: 20,
  },
});

export default Details;
