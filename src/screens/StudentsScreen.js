import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>Students</Text>

      <StudentDetails
        name="Ellie"
        image={require("../../assets/Avatar-1.jpeg")}
        desc="Ellie is a student in the Computer Science program."
      />

      <StudentDetails
        name="Gabriel"
        image={require("../../assets/Avatar-2.png")}
        desc="Gabriel is a student in the Computer Science program."
      />

      <StudentDetails
        name="Miguel"
        image={require("../../assets/Avatar-3.png")}
        desc="Miguel is a student in the Computer Science program."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 22,
    marginVertical: 20,
    fontWeight: "bold",
  },
});

export default StudentsScreen;
