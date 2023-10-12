import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Calendar = () => {
  const navigation = useNavigation();

  const data = [
    // { id: 1, title: "Enero", onPress: () => irModal() },
    { id: 1, title: "Enero" },
    { id: 2, title: "Febrero" },
    { id: 3, title: "Marzo" },
    { id: 4, title: "Abril" },
    { id: 5, title: "Mayo" },
    { id: 6, title: "Junio" },
    // { id: 7, title: "Julio", onPress: () => Julio() },
    { id: 7, title: "Julio" },
    { id: 8, title: "Agosto" },
    // { id: 9, title: "Septiembre", onPress: () => septiembre() },
    { id: 9, title: "Septiembre" },
    { id: 10, title: "Octubre" },
    { id: 11, title: "Noviembre" },
    { id: 12, title: "Diciembre" },
  ];

  const columns = 3;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      // onPress={item.onPress}
      onPress={() => navigation.navigate("Modal", { monthName: item.title })}
    >
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item, index }) => (
    <View style={styles.gridItem}>
      {index % columns === 0 && <View style={styles.column} />}
      {renderItem({ item })}
    </View>
  );

  return (
    <SafeAreaView>
      <View
        style={{
          //   flex: 1,
          //   justifyContent: "center",
          padding: 20,
          paddingBottom: 40,
          paddingTop: 30,
          //   backgroundColor: "red",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 600, color: "#05633E" }}>
          Calendario Maya Chuj de 2023
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#05633E",
            textAlign: "center",
          }}
        >
          STZOLAL B'ISLAB' K'U YIK CHUJ HAB'IL 5139
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={columns}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  gridItem: {
    flex: 1,
    alignItems: "center",
  },
  column: {
    width: 16,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#4a98f7",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  imagen: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalCloseButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#4a98f7",
    padding: 8,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: "white",
    fontSize: 16,
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});
