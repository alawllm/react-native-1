import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../../shared/components/input";
import { Button } from "../../shared/components/button";

import { validationSchema } from "./validationSchema";

export const RegisterScreen = ({ navigation }) => {
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
    navigation.navigate("Characters");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register your account</Text>
        <Text style={styles.subtitle}>Enter your information below</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Email Address"
              placeholder="Enter Email Address"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              error={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Password"
              placeholder="Enter Password"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              secureTextEntry
              autoComplete="password"
              error={error?.message}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Confirm Password"
              placeholder="Enter Your Password"
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              secureTextEntry
              autoComplete="password"
              error={error?.message}
            />
          )}
        />
      </View>
      <Button
        onPress={handleSubmit(onSubmit)}
        label={"Register User"}
        disabled={!isValid || isSubmitting}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flex: 1,
  },
  titleContainer: {
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#080613",
  },
  subtitle: {
    color: "#A1A1A1",
    fontSize: 14,
    fontWeight: "regular",
  },
  inputsContainer: {
    paddingTop: 24,
    gap: 16,
  },
});
