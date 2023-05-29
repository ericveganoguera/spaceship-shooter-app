import React from "react";
import { View, Text } from "react-native";
import { Routes, Route, Link } from "react-router-native";
import StartMenu from "./StartMenu";
import Game from "./Game";

const Main = () => {
  return (
    <View>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <StartMenu />
          }
        />
        <Route path="/game" exact element={<Game />} />
        <Route path="/options" exact element={<Text>Options</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
