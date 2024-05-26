import { View, Text, StyleSheet } from "react-native";

export const Logo = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Logo</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: "#6347F9",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
