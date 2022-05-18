import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";

const ProfileBody = () => {
  return (
    <View style={styles.container}>
      <List.Item
        style={styles.listItem}
        title="Favourites"
        left={(props) => (
          <Avatar.Icon style={styles.listAvatar} size={40} icon="heart" />
        )}
        right={(props) => <List.Icon size={40} icon="chevron-right" />}
      />
      <List.Item
        style={styles.listItem}
        title="My Account"
        left={(props) => (
          <Avatar.Icon style={styles.listAvatar} size={40} icon="account" />
        )}
        right={(props) => <List.Icon size={40} icon="chevron-right" />}
      />
      <List.Item
        style={styles.listItem}
        title="Edit Profile"
        left={(props) => (
          <Avatar.Icon style={styles.listAvatar} size={40} icon="pencil" />
        )}
        right={(props) => <List.Icon size={40} icon="chevron-right" />}
      />
      <List.Item
        style={styles.listItem}
        title="Settings"
        left={(props) => (
          <Avatar.Icon
            style={styles.listAvatar}
            size={40}
            icon="cellphone-settings"
          />
        )}
        right={(props) => <List.Icon size={40} icon="chevron-right" />}
      />
      <List.Item
        style={styles.listItem}
        title="Logout"
        left={(props) => (
          <Avatar.Icon style={styles.listAvatar} size={40} icon="logout" />
        )}
        right={(props) => <List.Icon size={40} icon="chevron-right" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
  },
  listAvatar: {
    backgroundColor: "#f7b2ef",
    marginRight: 20,
    marginTop: 10,
  },
});

export default ProfileBody;
