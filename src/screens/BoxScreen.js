import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = ({ params }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
      <View
        style={{ width: 100, height: 100, backgroundColor: "yellow" }}
      />
      <View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoxScreen;