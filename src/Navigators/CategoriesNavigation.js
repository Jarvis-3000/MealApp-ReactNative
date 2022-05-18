import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screen
import MealCategories from "../screens/MealCategories/index";
import MealsByCategory from "../screens/MealsByCategory/index";
import MealView from "../screens/MealView/index";

const Stack = createNativeStackNavigator();

const CategoriesNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MealCategories" component={MealCategories} />
      <Stack.Screen name="MealsByCategory" component={MealsByCategory} />
      <Stack.Screen name="MealView" component={MealView} />
    </Stack.Navigator>
  );
};

export default CategoriesNavigation;
