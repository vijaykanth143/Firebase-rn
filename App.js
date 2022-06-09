import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { initializeApp } from "firebase/app";
import { createStackNavigator } from "@react-navigation/stack";

import Registration from "./screens/Registration";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDBzenI88Z20LzNlaZ6jIWsfQ-zkFERXuw",
    authDomain: "fir-expo-b1e3a.firebaseapp.com",
    projectId: "fir-expo-b1e3a",
    storageBucket: "fir-expo-b1e3a.appspot.com",
    messagingSenderId: "462190044713",
    appId: "1:462190044713:web:82487354d2f0e233b2de38",
  }; // apiKey, authDomain, etc. (see above)

  initializeApp(firebaseConfig);
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Register"
      >
        <stack.Screen name="Register" component={Registration} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Welcome" component={Welcome} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
