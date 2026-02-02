import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

const MainScreen = () => {
    return(
        <View>
            <Text>This is Main screen</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "centre",
        justifyContent: "center",
    }
})