import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainScreen from "./screens/MainScreen";
import MessageScreen from "./screens/MessageScreen";
import FruitScreen from "./screens/FruitScreen";

const Stack = createStackNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FruitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );

}
