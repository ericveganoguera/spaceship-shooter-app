import React, { useState } from "react";
import { View, StyleSheet, Dimensions, PanResponder } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({
    left: windowWidth / 2 - 25,
    top: windowHeight - 75,
  });

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const { dx, dy } = gesture;
      movePlayer(dx, dy);
    },
  });

  const movePlayer = (dx, dy) => {
    setPlayerPosition((prevPosition) => ({
      left: prevPosition.left + dx,
      top: prevPosition.top + dy,
    }));
  };

  return (
    <View
      style={[
        styles.player,
        { left: playerPosition.left, top: playerPosition.top },
      ]}
      {...panResponder.panHandlers}
    />
  );
};

const styles = StyleSheet.create({
  player: {
    width: 50,
    height: 50,
    backgroundColor: "#f00",
    position: "absolute",
    justifyContent: 'flex-end'
  },
});

export default Game;
