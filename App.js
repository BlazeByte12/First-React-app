import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./screens/MenuScreen";
import ListScreen from "./screens/ListScreen";
import StudentsScreen from "./screens/StudentsScreen";
import MainScreen from "./screens/MainScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <>
                <Button
                  title="Menu"
                  onPress={() => navigation.navigate("Menu")}
                  color="purple"
                />
                <Button
                  title="List"
                  onPress={() => navigation.navigate("List")}
                  color="green"
                />
                <Button
                  title="Students"
                  onPress={() => navigation.navigate("Students")}
                  color="red"
                />
              </>
            ),
          })}
        />

        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
