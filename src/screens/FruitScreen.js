import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FruitScreen = () => {
    const fruit1 = "Apple";
    let fruit2 = "Banana";
    
    return (
        <View style={styles.container}>
            <Text style={styles.fruitText}>{fruit1}</Text>
            <Text style={styles.fruitText}>{fruit2}</Text>
        </View>
    );
};

export default FruitScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fruitText: {
        fontSize: 20,
        color: 'orange',
        marginBottom: 10,
    },
});