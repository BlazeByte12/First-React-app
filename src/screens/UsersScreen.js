import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class UsersScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await data.json();

    this.setState({
      users: jsonData,
    });
  }

  render() {
    const { users } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Users Screen</Text>

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={users}
          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text style={styles.thirdBox}>User ID: {item.id}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  box: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  thirdBox: {
    alignSelf: "flex-end",
  },
});

export default UsersScreen;