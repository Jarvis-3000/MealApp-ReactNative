import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ItemView({ style, item }) {
  const { name, measure } = item;
  return (
    <View style={[styles.container, { ...style }]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.measure}>{measure}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  name: {
    flex: 9,
    paddingHorizontal: 5,
  },
  measure: {
    flex: 3,
    paddingHorizontal: 5,
    fontWeight: "bold",
  },
});

export default ItemView;
