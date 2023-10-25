import { Picker } from "@react-native-picker/picker";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Nahual = () => {
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("01"); // Establece el mes inicial que desees.
  const [year, setYear] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = () => {
    if (day && month && year) {
      const selectedMonth = MESES.find((mes) => mes.id_mes === month);
      console.log("LA FECHA INGREASADA ES ", selectedDate);
      setSelectedDate(`${day}-${selectedMonth.id_mes}-${year}`);
    } else {
      setSelectedDate(null);
    }
  };

  const nahual = () => {
    if (selectedDate) {
      const selected = selectedDate;
      const nahuales = [
        {
          fecha: "12-12-2020",
          title: "Boton",
        },
        {
          fecha: "04-04-2014",
          title: "TOj",
        },
      ];

      const nahualEncontrado = nahuales.find((item) => item.fecha === selected);
      const nombreNahual = nahualEncontrado.title;
      if (nombreNahual) {
        return nombreNahual;
      } else {
        return "Nahual no encontrado";
      }
    }
    return "Selecciona una fecha primero";
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TextInput
          style={styles.input}
          placeholder="Día"
          value={day}
          onChangeText={(text) => setDay(text)}
          keyboardType="numeric"
        />

        <Picker
          selectedValue={month}
          style={styles.monthPicker}
          onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
        >
          {MESES.map((mes) => (
            <Picker.Item
              label={mes.nombre}
              value={mes.id_mes}
              key={mes.id_mes}
            />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Año"
          value={year}
          onChangeText={(text) => setYear(text)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar Fecha</Text>
      </TouchableOpacity>
      {selectedDate && (
        <Text style={styles.selectedDateText}>Tu Nahual es : {nahual()}</Text>
      )}
    </View>
  );
};

const MESES = [
  { id_mes: "01", nombre: "Enero" },
  { id_mes: "02", nombre: "Febrero" },
  { id_mes: "03", nombre: "Marzo" },
  { id_mes: "04", nombre: "Abril" },
  { id_mes: "05", nombre: "Mayo" },
  { id_mes: "06", nombre: "Junio" },
  { id_mes: "07", nombre: "Julio" },
  { id_mes: "08", nombre: "Agosto" },
  { id_mes: "09", nombre: "Septiembre" },
  { id_mes: "10", nombre: "Octubre" },
  { id_mes: "11", nombre: "Noviembre" },
  { id_mes: "12", nombre: "Diciembre" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 60,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginRight: 10,
  },
  monthPicker: {
    height: 40,
    width: 120,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Nahual;
