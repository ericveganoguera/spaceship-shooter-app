import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Link, Routes, Route } from "react-router-native";
import StartMenu from "./StartMenu";

const Main = () => {
  return (
    <View style={styles.container}>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <StartMenu />
          }
        />
        <Route path="/game" exact element={<Text>GAME</Text>} />
        <Route path="/options" exact element={<Text>Options</Text>} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});

export default Main;
