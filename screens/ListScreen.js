import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native/types_generated/index';

const students = [
    {name: "Alek", surname:"Novakovic", age: 17}, 
    {name: "Anida", surname:"Veledar", age: 17}, 
    {name: "Semin", surname:"Dedic", age: 17}, 
    {name: "Marko", surname:"Forcan", age: 17},
    
];

const ListScreen = () => {
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList
            keyExtractor={(students) => students.name}
                data={students}
                renderItem={({ item }) => (
                    <Text>{item.name} {item.surname}</Text>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

const styles = StyleSheet.create({});

export default ListScreen;
 
