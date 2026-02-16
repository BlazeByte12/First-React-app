import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MainScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Main Screen</Text>

      <Button
        title="Go to Menu Screen"
        onPress={() => props.navigation.goBack()}
        color="blue"
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

export default MainScreen;
