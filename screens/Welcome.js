import React from "react";
import { Text } from "react-native";
const Welcome = ({ route }) => {
  const data = route.params;
  const profile = data.profiles.data;
  return <Text>Welcome {profile.email}</Text>;
};

export default Welcome;
