import { StyleSheet, View, Text } from "react-native";

import { ApiProvider } from "./src/shared/providers";
import { PostList } from "./src/screens";

export default function App() {
  return (
    <ApiProvider>
      <View style={styles.container}>
        <Text>Blabla</Text>
        <PostList/>
      </View>
    </ApiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
