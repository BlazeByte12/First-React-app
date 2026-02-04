import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ExcerciseScreen = () => {
    let message = "Hi there";

    message = "Hi there from digital school!"
    
    return {
        <View>
        <Text style = {StyleSheet.textStyle}}>Hi there</Text>
        <Text>{message}</Text>
        <Text></Text>
        <View></View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});

export default ExcerciseScreen