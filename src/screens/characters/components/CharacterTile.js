import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const CharacterTile = ({ name, image, highlighted = false }) => {
  return (
    <TouchableOpacity
      style={[styles.container, highlighted ? styles.highlighted : {}]}>
      <Image
        style={styles.avatar}
        source={{
          uri: image,
        }}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
  highlighted: {
    backgroundColor: "#eee",
  },
  container: {},
});
