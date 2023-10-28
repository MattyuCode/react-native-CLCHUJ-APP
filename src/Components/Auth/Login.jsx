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
  StatusBar,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const { login } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <View style={tw`  `}>
            <Image
              style={[
                tw`w-50 h-50  border-4 `,
                { borderRadius: 150, borderColor: "#4a98f7" },
              ]}
              source={require("../../../assets/login.png")}
            />
          </View>

          <Text
            style={[tw`text-center  `, { fontSize: 30, marginTop: 20 }]}
          >
            LOGIN
          </Text>

          <TextInput
            style={[
              tw`w-80 bg-white p-4 border-2 border-sky-500 rounded-md mb-5 mt-5`,
              { fontSize: 17 },
            ]}
            placeholder="Nombre de usuario"
            value={user}
            onChangeText={(value) => setUser(value)}
          />

          <TextInput
            style={[
              tw`w-80 bg-white p-4 border-2 border-sky-500 rounded-md mb-5 mt-5`,
              { fontSize: 17 },
            ]}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Contraseña"
          />

          <TouchableOpacity
            onPress={() => {
              login(user, password);
            }}
            style={[tw`bottom-0 w-52  p-3 rounded-2xl `, styles.botones]}
          >
            <Text style={tw`font-semibold text-white text-center text-xl`}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            //FIXME: LLAMAMOS A ESTA FUNCION PARA IR LA PARTE DE REGISTRO CON NAVIGATION
            onPress={() => navigation.navigate("signup")}
            style={[tw`bottom-0 w-52 p-3 rounded-2xl mt-5`, styles.botones]}
          >
            <Text style={tw`font-semibold text-white text-center text-xl`}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.FondoBlanco}></View>

        <StatusBar style={"light"} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009baa",
    height: "100%",
  },
  FondoBlanco: {
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#ffff",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    height: "100%",
    zIndex: 0,
    marginTop: 180,
  },

  card: {
    zIndex: 1,
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // height: 350,
    width: "100%",
    // marginLeft: 20,
    marginTop: 100,
  },
  botones: {
    margnHorizontal: "25%",
    backgroundColor: "#009baa",
  },
});
