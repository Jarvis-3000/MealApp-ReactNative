import { View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingTop: 50 }}>
      <Text>Home</Text>
      <Button
        onPress={() => {
          navigation.navigate("MealCategories");
        }}
      >
        Chats
      </Button>
    </SafeAreaView>
  );
};

export default Home;
