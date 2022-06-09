import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, StatusBar, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../Components/input";
import { useNavigation } from "@react-navigation/native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState([]);
  const [empcode, setEmpcode] = useState("");
  const [name, setName] = useState("");
  const [passWord, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  let auth = getAuth();
  const navigation = useNavigation();
  const handleEmail = (e) => {
    setEmail(e);
  };
  const handleEmpcode = (e) => {
    setEmpcode(e);
  };
  const handleName = (e) => {
    setName(e);
  };
  const handlePassword = (e) => {
    setPassword(e);
  };
  const handleSubmit = () => {
    const data = {
      email: email,
      empcode: empcode,
      name: name,
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
    if (
      email.length <= 0 ||
      empcode.length <= 0 ||
      name.length <= 0 ||
      passWord.length <= 0
    ) {
      Alert.alert(
        "Invalid Inputs!",
        "Plz enter valid inputs(Non-empty inputs)",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, passWord)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        Alert.alert(err.message[{ text: "okay", style: "destructive" }]);
      });
    navigation.navigate("Home", { data });
    setEmail("");
    setEmpcode("");
    setName("");
    setPassword("");
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
      labelname: "EmpCode",
      placeholder: "Enter your EmpCode",
      name: "empcode",
      value: empcode,
      type: "text",
      handle: handleEmpcode,
    },
    {
      labelname: "UserName",
      placeholder: "Enter your Name",
      name: "name",
      value: name,
      type: "text",
      handle: handleName,
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
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#1767DD" />
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <KeyboardAwareScrollView
          style={{
            backgroundColor: "white",
            paddingTop: 20,
          }}
        >
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
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Registration;
