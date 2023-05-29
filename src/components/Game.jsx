import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, PanResponder, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants'
import SpaceShip from '../../assets/spaceship1.png'
import Background from '../../assets/background.png'
import Bullet from '../../assets/shot1.png'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const widthPlayer = 80
const heightPlayer = 80
const widthBullet = 20
const heightBullet = 40

const Game = () => {
  //Posicion inicial del jugador
  const [playerPosition, setPlayerPosition] = useState({
    left: windowWidth / 2 - widthPlayer/2,
    top: windowHeight - 100,
  });

  //Posicion del jugador
  const playerPositionRef = useRef(playerPosition)

  //Array de las balas
  const [bullets, setBullets] = useState([]);

  //Variable de letura de presion de pantalla
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const { dx, dy } = gesture;
      movePlayer(dx, dy);
    },
  });

  //Movimiento jugador
  const movePlayer = (dx, dy) => {
    setPlayerPosition((prevPosition) => ({
      left: prevPosition.left + dx,
      top: prevPosition.top + dy,
    }));
  };

  //Aparicion de las balas
  const shootBullets = () => {
    const bullet = {
      id: new Date().getTime(),
      left: playerPositionRef.current.left + widthPlayer/2 - widthBullet/2,
      top: playerPositionRef.current.top - 25,
    };

    setBullets((prevBullets) => [...prevBullets, bullet]);
  };

  //Movimiento de las balas
  const moveBullets = () => {
    setBullets((prevBullets) =>
      prevBullets.map((bullet) => ({
        ...bullet,
        top: bullet.top - 5, // Velocidad de movimiento de las balas hacia arriba
      })).filter((bullet)=>bullet.top > -20)
    );
  };

  useEffect(() => {
    const intervalShootBullet = setInterval(() => {
      shootBullets();
    }, 1000);

    const intervalMoveBullet = setInterval(() => {
      moveBullets();
    }, 16);

    return () => {
      clearInterval(intervalShootBullet);
      clearInterval(intervalMoveBullet);
    };
  }, []);

  useEffect(()=>{
    playerPositionRef.current = playerPosition;
  },[playerPosition])

  return (
    <View>
      <Image style={styles.background} source={Background}/>
      {bullets.map((bullet) => (
        <View
          key={bullet.id}
          style={[styles.bullet, { left: bullet.left, top: bullet.top }]}
        >
          <Image source={Bullet} style={styles.bulletImage}/>
        </View>
      ))}
      <View
        style={[
          styles.player,
          { left: playerPosition.left, top: playerPosition.top },
        ]}
        {...panResponder.panHandlers}
      >
        <Image source={SpaceShip} style={styles.playerImage} />
      </View>
      <StatusBar style="light" hidden/>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 0
  },
  player: {
    width: widthPlayer,
    height: heightPlayer,
    position: "absolute"
  },
  bullet: {
    width: widthBullet,
    height: heightBullet,
    position: "absolute",
  },
  playerImage:{
    width: "100%",
    height: '100%'
  },
  bulletImage:{
    width: "100%",
    height: '100%'
  }
});

export default Game;
