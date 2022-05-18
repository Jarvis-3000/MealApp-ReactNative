import React, { useState, useEffect, useCallback, useRef } from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";

import {
  ActivityIndicator,
  Button,
  List,
  Title,
  Text,
} from "react-native-paper";
import YoutubeVideo from "../../components/YoutubeVideo";
import ReviewsForm from "../../components/ReviewsForm/index";

import { useSelector, useDispatch } from "react-redux";

import TwoColumnListView from "../../components/TwoColumnListView";
import { fetchMeal } from "../../redux/Meal/actions";
import DrawerSidebar from "../../components/DrawerSidebar";

const formatIngredients = (data) => {
  const INGREDIENT_NAME = "strIngredient";
  const INGREDIENT_MEASURE = "strMeasure";

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = data[INGREDIENT_NAME + i];
    const measure = data[INGREDIENT_MEASURE + i];
    if (name && measure) {
      ingredients.push({ key: i, name, measure });
    }
  }
  return ingredients;
};

function MealView({ route, navigation }) {
  // console.log(navigation.getParent("Drawer"));
  const dispatch = useDispatch();
  const [reviewFormOpened, setReviewFormOpened] = useState(false);
  const { mealTitle } = route.params || "Beef and mustard pie";
  const { fetchState, data: mealState } = useSelector(
    (state) => state.meal.meal
  );
  const {
    strMealThumb: imageSrc,
    strYoutube: youtubeLink,
    strInstructions: recipe,
  } = mealState;

  useEffect(() => {
    dispatch(fetchMeal(mealTitle));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#ebebeb",
      }}
    >
      <Title style={styles.title}>{mealTitle}</Title>
      {fetchState === 1 ? (
        <ActivityIndicator animating={true} />
      ) : (
        <View>
          {youtubeLink ? (
            <YoutubeVideo link={youtubeLink} />
          ) : (
            <Image source={{ uri: imageSrc, width: "100%", height: 300 }} />
          )}
          {/* Ingredients */}
          <List.Accordion title="Ingredients">
            <TwoColumnListView
              listStyle={{ maxHeight: 300 }}
              title={"Ingredients"}
              itemList={formatIngredients(mealState)}
            />
          </List.Accordion>
          {/* Recipe */}
          <List.Accordion title="Recipe">
            <Text style={{ paddingHorizontal: 15 }}>{recipe}</Text>
          </List.Accordion>
          {/* Reviews */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 10,
  },
});

export default MealView;
