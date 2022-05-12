import React from "react";
import { View, Text, StyleSheet} from "react-native";

function ItemView({name, measure}) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{measure}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:5,
    borderBottomWidth:0.5
  }
})


export default IngredientItemView