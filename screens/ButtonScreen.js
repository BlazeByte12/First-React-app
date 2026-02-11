import react from "react";
import { View, Text, Stylesheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = () => {
    let counter = 0;
    return (
        <View>
            <Button
            title="Click me"
            color="Purple"
            onPress={() =>
                console.log("Button Clicked this many times: ", counter++)
            }    
            />

            <TouchableOpacity
            style={}
            
            ></TouchableOpacity>
        </View>
    );
};

const styles = Stylesheet.create({
    textStyle: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    touchableButton: {
        backgroundColor: "purple",
        marginVertical: 15,
        paddingVertical: 15,
        borderRadius: 6,
        marginHorizontal: 20,
    },
    btnText: {
        color: "white",
        textAlign= "center",
        fontSize: 25,
        fontWeight: "bold"
    }
});

