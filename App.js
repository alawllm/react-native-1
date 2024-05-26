import { StyleSheet, View, Text } from "react-native";

import { CharactersScreen } from "./src/screens";
import { ApiProvider } from "./src/shared/providers";

export default function App() {
  return (
    <ApiProvider>
      <View style={styles.container}>
        <Text>Blabla</Text>
        <CharactersScreen />
      </View>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
