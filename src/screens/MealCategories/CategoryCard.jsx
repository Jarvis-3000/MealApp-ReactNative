import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Paragraph } from "react-native-paper";

function CategoryCard({
  name = "satish",
  thumb = "https://picsum.photos/700",
  description = "Hello World",
  navigation,
}) {
  return (
    <Card mode="elevated" elevation={10} style={styles.container}>
      <Card.Cover source={{ uri: thumb }} />
      <Card.Title title={name} />
      <Card.Content>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => {}}>View More</Button>
        <Button
          onPress={() => {
            navigation.navigate("MealsByCategory", { category: name });
          }}
        >
          Open
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default CategoryCard;
