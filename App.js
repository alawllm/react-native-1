import { ApiProvider } from "./src/shared/providers";
import { RegisterScreen } from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <ApiProvider>
      <SafeAreaProvider>
          <RegisterScreen />
      </SafeAreaProvider>
    </ApiProvider>
  );
}
