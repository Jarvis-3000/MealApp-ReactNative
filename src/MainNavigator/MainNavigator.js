import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import DrawerNavigation from "../Navigators/DrawerNavigation/DrawerNavigation";
import Authentication from "../screens/Authentication/index";

function MainNavigator() {
  const { isUserLoggedIn } = useSelector((state) => state.user);
  console.log({ isUserLoggedIn });

  return isUserLoggedIn ? <DrawerNavigation /> : <Authentication />;
}

export default MainNavigator;
