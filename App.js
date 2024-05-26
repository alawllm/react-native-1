import { ApiProvider } from "./src/shared/providers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./src/navigators";

export default function App() {
  return (
    <ApiProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <RootStackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ApiProvider>
  );
}
