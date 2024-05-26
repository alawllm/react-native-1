import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

//1.email
//2.password
//3. confirm password

const Button = () => {
  return (
    <TouchableOpacity style={styles.containedButton}>
      <Text>Register User</Text>
    </TouchableOpacity>
  );
};

export const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Register new user</Text>
      <View style={styles.inputsContainer}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
        <TextInput style={styles.input} placeholder="confirm password" />
      </View>
      <Button />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 20,
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
