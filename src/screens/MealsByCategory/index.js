import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";

import { fetchMealsByCategory } from "../../redux/Meal/actions";
import MealCard from "./MealCard";

function MealsByCategory({ route, navigation }) {
  const dispatch = useDispatch();
  const { category } = route.params;
  const { fetchState, data } = useSelector(
    (state) => state.meal.mealsByCategory
  );
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    dispatch(fetchMealsByCategory(category));
  }, []);

  useEffect(() => {
    if (data) {
      setMeals(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Title style={{ padding: 5 }}>Meals By Category</Title>
      <View>
        {fetchState === 1 ? (
          <ActivityIndicator animating={true} />
        ) : (
          <FlatList
            horizontal={false}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 50 }}
            data={meals}
            renderItem={({ item }) =>
              MealCard({
                navigation,
                name: item.strMeal,
                thumb: item.strMealThumb,
              })
            }
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 20,
  },
});

export default MealsByCategory;
