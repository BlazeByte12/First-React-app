import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NUMBERS = Array.from({ length: 20 }, (_, i) => i + 1);

const NumbersScreen = () => {
  return (
    <FlatList
      data={NUMBERS}
      keyExtractor={(item) => item.toString()}
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

export default NumbersScreen;
