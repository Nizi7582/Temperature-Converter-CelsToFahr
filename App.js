import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
// import InputTemperature from "./components/HomeMenu/InputTemperature.jsx";

export const CookieCount = ({ currentCelsius, currentFahrenheit }) => {
  return (
    <View style={styles.countContainer}>
      <Text style={styles.count}>{currentFahrenheit}</Text>
    </View>
  );
};

export default function App() {
  const [currentCelsius, setCurrentCelsius] = useState("0");
  const [currentFahrenheit, setCurrentFahrenheit] = useState("32.00"); // Initial value in Fahrenheit

  const celcToFahr = () => {
    const celsiusValue = parseFloat(currentCelsius);

    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9.0) / 5.0 + 32.0;
      setCurrentFahrenheit(fahrenheitValue.toFixed(2).toString());
    } else {
      alert("Please enter a valid number for Celsius");
    }
  };

  return (
    <ImageBackground
      source={require("./assets/snow.jpg")}
      style={styles.container}
    >
      <Image
        source={require("./assets/flocon.png")}
        style={styles.background}
      ></Image>

      <CookieCount
        currentCelsius={currentCelsius}
        currentFahrenheit={currentFahrenheit}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputElement}
          value={currentCelsius}
          onChangeText={(newValue) => setCurrentCelsius(newValue)}
          keyboardType="numeric"
        />
        <Text>°C</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={celcToFahr}>
        <Text style={{ color: "white", fontSize: 20 }}>Convertir</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#537eb1",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 2,
    height: 40,
    borderRadius: 10,
  },
  count: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
  },
  background: {
    position: "absolute",
    left: -50,
    top: 30,
    height: 350,
    width: 150,
    resizeMode: "contain",
    transform: [{ rotate: "18deg" }],
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    marginVertical: 50,
    alignSelf: "stretch",
  },

  inputContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    width: 300,
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  inputElement: {
    flex: 3,
  },
});
