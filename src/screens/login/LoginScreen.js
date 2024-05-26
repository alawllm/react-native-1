import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";
import { validationSchema } from "./validationSchema";

//1.email
//2.password
//3. confirm password

export const LoginScreen = ({ navigation }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate("characters");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login new user</Text>
      <View style={styles.inputsContainer}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              placeholder="email"
              value={field.value}
              onChangeText={field.onChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              s
              error={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              placeholder="password"
              value={field.value}
              onChangeText={field.onChange}
              error={error?.message}
              secureTextEntry
            />
          )}
        />
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        label={"Login User"}
        disabled={!isValid || isSubmitting}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 20,
    display: "flex",
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
});
