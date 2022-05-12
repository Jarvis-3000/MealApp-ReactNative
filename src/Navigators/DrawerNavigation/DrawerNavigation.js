import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { View, Text } from "react-native";

//navigation screens
import HomeNavigation from "../HomeNavigation";
import CategoriesNavigation from "../CategoriesNavigation";
import UserNavigation from "../UserNavigation";

import CustomDrawer from "./CustomDrawer";
// import ScreenOptions from "../../../utils/ScreenOptions";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      // screenOptions={ScreenOptions}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Categories" component={CategoriesNavigation} />
      <Drawer.Screen name="User" component={UserNavigation} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
