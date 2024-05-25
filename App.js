import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CharactersScreen } from "./src/screens";

export default function App() {
  return (
    <ApiProvider>
      <View style={styles.container}>
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

const queryClient = new QueryClient();

const ApiProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
