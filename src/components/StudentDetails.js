import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const StudentDetails = ({ name, image, desc }) => {
  return (
    <View style={styles.cardWrapper}>
      <Image source={image} style={styles.image} />

      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 25,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoWrapper: {
    marginLeft: 15,
    marginTop: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default StudentDetails;
