import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MOVIES = [
  { title: 'Inception', year: 2010 },
  { title: 'Matrix', year: 1999 },
  { title: 'Interstellar', year: 2014 },
];

export default function MoviesScreen() {
  return (
    <FlatList
      data={MOVIES}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => {
        
        let backgroundColor = 'gray';

        if (item.year >= 2010) {
          backgroundColor = 'lightgreen';
        }

        return (
          <View style={{ padding: 20, backgroundColor: backgroundColor }}>
            <Text>{item.title} - {item.year}</Text>
          </View>
        );
      }}
    />
  );
}
