import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuoteScreen = () => {

const quote = "Success is not final, failure is not fatal: it is the courage to continue that counts.";

let author = "Winston Churchill";

return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
    </View>
  );
};

export default QuoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  quoteText: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
    authorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});