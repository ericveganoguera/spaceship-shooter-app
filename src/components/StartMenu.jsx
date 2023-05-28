import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const StartMenu = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Spaceship Shooter!</Text>
      </View>
      <View style={styles.container}>
        <Link to={"/game"}>
          <Text style={styles.button}>START</Text>
        </Link>
        <Link to={"/options"}>
          <Text style={styles.button}>OPTIONS</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "70%",
  },
  button: {
    backgroundColor: "#ddd",
    textAlign: "center",
    fontSize: 40,
    borderRadius: 10,
    marginBottom: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
  },
  title: { height: "20%", justifyContent: "center" },
});

export default StartMenu;
