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
      <View style={{height: '20%'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "60%",
  },
  button: {
    backgroundColor: "#ffd359",
    textAlign: "center",
    fontSize: 40,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: "center",
  },
  titleText: {
    fontSize: 40,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#ff4778",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  title: {
    height: "20%",
    justifyContent: "center",
  },
});

export default StartMenu;
