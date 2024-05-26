import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const Button = ({ onPress, label, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.containedButton,
        disabled ? styles.disabledContainedButton : {},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.text, disabled ? styles.disabledText : {}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containedButton: {
    padding: 16,
    backgroundColor: "#6347F9",
    borderRadius: 12,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  disabledContainedButton: {
    backgroundColor: "#EDEDED",
  },
  disabledText: {
    color: "#A1A1A1",
  },
});
