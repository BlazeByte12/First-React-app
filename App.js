import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StudentScreen from "./screens/StudentScreen";
import MessageScreen from "./screens/MessageScreen";
import FruitScreen from "./screens/FruitScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Fruit" component={FruitScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
