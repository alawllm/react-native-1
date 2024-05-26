import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { Button } from "../../shared/components";
import { Route } from "../../shared/constants";

import { useAppState } from "../../shared/hooks";

export const DashboardScreen = ({ navigation, route }) => {
  const logout = useAppState((state) => state.logout);

  const goToCharacters = () => {
    navigation.navigate(Route.CHARACTERS);
  };

  const goToPosts = () => {
    navigation.navigate(Route.POSTS);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../../../assets/animations/hamster.json")}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <Text>Hello {route.params?.email ?? "N/A"}!!!</Text>
      <Button label="Characters" onPress={goToCharacters} />
      <Button label="Posts" onPress={goToPosts} />
      <Button label="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
});
