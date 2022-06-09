import React, { useState } from "react";
import { Text, View, Button, SafeAreaView, Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Input from "../Components/input";

const Home = ({ route }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [details, setDetails] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();
  const profiles = route.params;

  const handleEmail = (e) => {
    setEmail(e);
  };

  const handlePassword = (e) => {
    setPassword(e);
  };
  const data = [
    {
      labelname: "Email",
      placeholder: "Enter your Email",
      name: "email",
      value: email,
      type: "email",
      handle: handleEmail,
    },

    {
      labelname: "Password",
      placeholder: "Enter your Password",
      name: "password",
      value: passWord,
      //type: "password",
      handle: handlePassword,
      secure: showPassword,
    },
  ];
  const handleSubmit = () => {
    const data = {
      email: email,

      passWord: passWord,
    };
    if (
      email.indexOf("@spinebiz.com", email.length - "@spinebiz.com".length) !==
      -1
    ) {
      setDetails([...details, data]);
    } else {
      Alert.alert("Invalid email!", "Plz enter a valid Email", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    if (email.length <= 0 || passWord.length <= 0) {
      Alert.alert(
        "Invalid Inputs!",
        "Plz enter valid inputs(Non-empty inputs)",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, passWord)
      .then(() => {
        navigation.navigate("Welcome", { profiles });
      })
      .catch((err) => Alert.alert("please enter Valid Credintials"));
  };
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 25,
        }}
      >
        {data.map((item) => (
          <Input
            labelname={item.labelname}
            placeholder={item.placeholder}
            onchange={item.handle}
            name={item.name}
            value={item.value}
            type={item.type}
            secureTextEntry={item.secure}
          />
        ))}
        <View
          style={{
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Button
            title="Show Password"
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <View>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
