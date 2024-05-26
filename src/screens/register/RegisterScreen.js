import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Alert } from "react-native";

//1.email
//2.password
//3. confirm password

const Button = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.containedButton} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export const RegisterScreen = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = () => {
    Alert.alert(JSON.stringify(formState));
  };

  const setInputValue = (name, newValue) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register new user</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={formState.email}
          onChange={(value) => setInputValue("email", value)}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={formState.password}
          onChange={(value) => setInputValue("password", value)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          value={formState.confirmPassword}
          onChange={(value) => setInputValue("confirmPassword", value)}
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 20,
    display: "flex",
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  inputsContainer: {
    paddingTop: 14,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  containedButton: {
    padding: 16,
    backgroundColor: "blue",
    borderRadius: 8,
    textAlign: "center",
  },
});
