import { View, Text, TextInput, StyleSheet } from "react-native";

export const Input = ({ label, error, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : {}]}
        {...rest}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: "#DFDFDF",
    color: "#080613",
    height: 48,
  },
  inputError: {
    borderColor: "#EF4444",
  },
  inputContainer: {
    gap: 8,
  },
  textLabel: {
    color: "#A1A1A1",
    fontSize: 14,
  },
  errorMessage: {
    fontSize: 12,
    color: "#EF4444",
  },
});
