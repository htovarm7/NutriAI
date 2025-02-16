import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Cuenta creada con éxito!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Inicio de sesión exitoso!");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput style={{ borderBottomWidth: 1 }} value={email} onChangeText={setEmail} />
      <Text>Contraseña:</Text>
      <TextInput style={{ borderBottomWidth: 1 }} value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Registrarse" onPress={handleSignUp} />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
}
