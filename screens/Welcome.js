import React from "react";
import { Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
const Welcome = ({ route }) => {
  const data = route.params;
  const profile = data.profiles.data;
  return <GiftedChat />;
};

export default Welcome;
