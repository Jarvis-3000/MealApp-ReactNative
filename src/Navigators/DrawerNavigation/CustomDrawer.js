import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button, IconButton, Drawer } from "react-native-paper";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/User/actions";

function CustomDrawer(props) {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(0);

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeDrawer}>
        <IconButton
          Button
          icon="close-circle-outline"
          size={40}
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
      {/*  */}
      <ScrollView style={styles.drawerItems}>
        <Drawer.Section>
          <Drawer.Item
            style={styles.drawerItem}
            onPress={() => {
              setActive(0);
              props.navigation.navigate("Home");
            }}
            icon="home"
            label="Home"
            active={active === 0}
          />
          <Drawer.Item
            style={styles.drawerItem}
            onPress={() => {
              setActive(1);
              props.navigation.navigate("Categories");
            }}
            icon="view-dashboard"
            label="Categories"
            active={active === 1}
          />
          <Drawer.Item
            style={styles.drawerItem}
            onPress={() => {
              setActive(2);
              props.navigation.navigate("User");
            }}
            icon="account"
            label="User"
            active={active === 2}
          />
          <Drawer.Item
            style={styles.drawerItem}
            onPress={() => {
              setActive(3);
              handleLogout();
            }}
            icon="logout"
            label="Logout"
            active={active === 3}
          />
        </Drawer.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  iconStyle: {
    marginRight: 20,
  },
  labelStyle: {
    fontSize: 20,
    marginHorizontal: 20,
    color: "green",
  },
  closeDrawer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  drawerItems: {
    width: "100%",
  },
  drawerItem: {
    padding: 10,
  },
});

export default CustomDrawer;
