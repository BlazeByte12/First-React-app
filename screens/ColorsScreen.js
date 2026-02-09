import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const COLORS = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

const ColorsScreen = () => {
  return (
    <FlatList
      data={COLORS}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
  },
});

export default ColorsScreen;
