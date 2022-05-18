import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";

import { fetchMealCategories } from "../../redux/Meal/actions";
import CategoryCard from "./CategoryCard";

function MealCategories({ navigation }) {
  const dispatch = useDispatch();
  const { fetchState, data } = useSelector(
    (state) => state.meal.mealCategories
  );
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchMealCategories());
  }, []);

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Title>Categories</Title>
      <View>
        {fetchState === 1 ? (
          <ActivityIndicator animating={true} />
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 50 }}
            data={categories}
            renderItem={({ item }) =>
              CategoryCard({
                name: item.strCategory,
                thumb: item.strCategoryThumb,
                description: item.strCategoryDescription,
                navigation: navigation,
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

export default MealCategories;
