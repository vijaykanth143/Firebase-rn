import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { app } from "./firebaseconfig";
import { createStackNavigator } from "@react-navigation/stack";

import Registration from "./screens/Registration";

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register"
      >
        <stack.Screen name="Register" component={Registration} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
