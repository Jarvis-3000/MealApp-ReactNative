import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ProfileBody/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserProfile;

// `
// User Image/Avatar
// User Username

// My Recipes
// Liked Recipes
// Commented Recipes
// Settings -> General/Account
// Logout

// `
