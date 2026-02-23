import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>

      <Button
        title="Go to Students Screen"
        onPress={() => props.navigation.navigate("Students")}
        color="blue"
      />

      <Button
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("BoxScreen")}
        color="blue"
      />

      <Button
        title="Go to Box2 Screen"
        onPress={() => props.navigation.navigate("Box2Screen")}
        color="blue"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={() => props.navigation.navigate("Students")}>
        <Text style={styles.buttonText}>Go to Students Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  button: {
    backgroundColor: "blue",
    marginVertical: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default MenuScreen;
