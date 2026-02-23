import React from "react";
import { View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <View style={styles.yellowBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },

  redBox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 10,
  },

  yellowBox: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    margin: 10,
  },

  greenBox: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    margin: 10,
  },
});

export default Box2Screen;