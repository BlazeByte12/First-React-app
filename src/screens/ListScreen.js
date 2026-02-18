import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const students = [
    { name: "Alek", surname: "Novakovic", age: 17 },
    { name: "Anida", surname: "Veledar", age: 17 },
    { name: "Semin", surname: "Dedic", age: 17 },
    { name: "Marko", surname: "Forcan", age: 17 },
];

const ListScreen = () => {
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList
                keyExtractor={(item) => item.name}
                data={students}
                renderItem={({ item }) => (
                    <Text>{item.name} {item.surname}</Text>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};  

const styles = StyleSheet.create({});

export default ListScreen;
