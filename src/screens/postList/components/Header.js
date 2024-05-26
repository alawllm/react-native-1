import { StyleSheet, Text } from "react-native";

export const Header = () => {
  return <Text style={styles.title}>Your Little List</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
  },
});
