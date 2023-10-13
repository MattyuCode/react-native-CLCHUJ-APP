import { createContext, useEffect, useState } from "react";
import { API_Services } from "../../Config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isToken, setIsToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_Services}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Ocurrio un error: " + errorData);
        alert(errorData.message);
      } else {
        const data = await response.json();
        const datos = data.data;

        setUserInfo(datos.user.user);
        setIsToken(datos.token);

        AsyncStorage.setItem("access_token", datos.token);
        AsyncStorage.setItem("user", datos.user.user);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(false);
    setIsToken(null);
    //NOTE: ELIMIANDO EL INICIO DE SESSION
    AsyncStorage.removeItem("access_token");
    AsyncStorage.removeItem("user");
  };

  useEffect(() => {
    const isAuthenticated = async () => {
      try {
        setIsLoading(true);
        //MAT: OBTENIEDO LOS DATOS DEL TOKEN GENERADO Y CON EL USUARIO
        const token = await AsyncStorage.getItem("access_token");
        let userInfo = await AsyncStorage.getItem("user");

        if (userInfo) {
          setIsToken(token);
          setUserInfo(userInfo);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    isAuthenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, isToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
