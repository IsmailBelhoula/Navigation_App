import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "./comonents/screens/FirstScreen";
import SecondScreen from "./comonents/screens/SecondScreen/SecondScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
