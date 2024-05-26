import { ApiProvider } from "./src/shared/providers";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoginScreen } from "./src/screens";

export default function App() {
  return (
    <ApiProvider>
      <SafeAreaProvider>
        <LoginScreen />
      </SafeAreaProvider>
    </ApiProvider>
  );
}
