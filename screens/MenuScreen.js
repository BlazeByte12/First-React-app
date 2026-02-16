import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>

      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
        color="blue"
      />

      <Button
        title="Go to Main Screen"
        onPress={() => props.navigation.navigate("Main")}
        color="green"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default MenuScreen;
