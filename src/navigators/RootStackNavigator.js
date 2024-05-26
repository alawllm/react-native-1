import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Route } from "../shared/constants";

import {
  CharactersScreen,
  LoginScreen,
  RegisterScreen,
  PostList,
} from "../screens";

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="login">
      <RootStack.Screen
        name={Route.LOGIN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={Route.REGISTER}
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name={Route.CHARACTERS} component={CharactersScreen} />
      <RootStack.Screen name={Route.POSTS} component={PostList} />
    </RootStack.Navigator>
  );
};
