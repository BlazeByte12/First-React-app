import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageScreen = () => {
    const firstMessage = "Zdravo, ovo je txt";

    let secondMessage = "Ovo je drugi txt";

  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>{firstMessage}</Text>
      <Text style={styles.secondText}>{secondMessage}</Text>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  firstText: {
    fontSize: 22,
    color: "blue",
    marginBottom: 10,
  },

  secondText: {
    fontSize: 18,
    color: "green",
  },
});