import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
const Drawer = createDrawerNavigator();

const ChildrenComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Satish</Text>
    </View>
  );
};

function DrawerSidebar(props) {
  return (
    <Drawer.Navigator
      id="RightDrawer"
      useLegacyImplementation
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      drawerContent={(pro) => <ChildrenComponent {...pro} />}
    >
      <Drawer.Screen name="Sidebar" component={ChildrenComponent} />
    </Drawer.Navigator>
  );
}

export default DrawerSidebar;
