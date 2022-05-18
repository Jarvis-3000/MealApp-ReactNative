import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen
import UserProfile from "../screens/UserProfile";

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
