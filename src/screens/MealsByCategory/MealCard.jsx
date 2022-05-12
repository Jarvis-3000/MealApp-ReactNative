import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card } from "react-native-paper";

function MealCard({
  navigation,
  name = "satish",
  thumb = "https://picsum.photos/700",
}) {
  return (
    <View style={styles.container}>
      <Card mode="elevated" elevation={10}>
        <Card.Cover source={{ uri: `${thumb}/preview` }} />
        <Card.Title title={name} />
        <Card.Actions>
          <Button
            onPress={() => {
              navigation.navigate("MealView", { mealTitle: name });
            }}
          >
            Open
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 6,
    padding: 5,
  },
});

export default MealCard;
