import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const StudentScreen = () => {

  const firstName = "Benjamin";
const lastName = "Hodzic";
  const birthday = "28.7.2000";

  let fullName = firstName + " " + lastName;

  const hobbies = [
    { id: '1', name: 'Fudbal' },
    { id: '2', name: 'Programiranje' },
    { id: '3', name: 'Muzika' },
    { id: '4', name: 'Gaming' },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Student Info</Text>

      <Text style={styles.text}>Full Name: {fullName}</Text>
      <Text style={styles.text}>Birthday: {birthday}</Text>

      <Text style={styles.subtitle}>Hobbies:</Text>


      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.hobbyItem}>• {item.name}</Text>
        )}
      />

    </View>
  );
};

export default StudentScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  hobbyItem: {
    fontSize: 16,
    marginBottom: 5,
  },




});
