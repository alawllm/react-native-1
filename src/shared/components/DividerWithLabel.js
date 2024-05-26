import { View, Text, StyleSheet } from "react-native";

export const DividerWithLabel = ({ label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.text}>{label}</Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#EDEDED",
    flex: 1,
  },
  text: {
    color: "#080613",
    fontSize: 14,
  },
});
