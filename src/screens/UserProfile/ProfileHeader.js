import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const ProfileHeader = ({ name, username }) => {
  return (
    <View style={styles.container}>
      {true ? (
        <Avatar.Image
          size={100}
          source={require("../../../assets/satish_sketch.png")}
        />
      ) : (
        <Avatar.Text size={100} label="SG" />
      )}
      <Text style={styles.username}>jarvis3000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  username: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default ProfileHeader;
