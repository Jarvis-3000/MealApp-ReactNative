import * as actionTypes from "./actionTypes";
import axios from "axios";

const MEAL_CATEGORIES_URL =
  "https://www.themealdb.com/api/json/v1/1/categories.php";
const MEALS_BY_CATEGORY_URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// all categories request
export const fetchMealCategories = () => {
  return function (dispatch) {
    //for showing fetching icon
    dispatch({ type: actionTypes.FETCH_MEAL_CATEGORIES_REQUEST });

    //fetching execution
    axios
      .get(MEAL_CATEGORIES_URL)
      .then((res) => {
        return dispatch({
          type: actionTypes.FETCH_MEAL_CATEGORIES_SUCCESS,
          payload: res.data.categories,
        });
      })
      .catch((error) => {
        return dispatch({
          type: actionTypes.FETCH_MEAL_CATEGORIES_FAILURE,
          payload: error,
        });
      });
  };
};

//selected category meals request
export const fetchMealsByCategory = (category) => {
  return function (dispatch) {
    //for showing fetching icon
    dispatch({ type: actionTypes.FETCH_MEALS_BY_CATEGORY_REQUEST });

    //fetching execution
    axios
      .get(`${MEALS_BY_CATEGORY_URL}${category}`)
      .then((res) => {
        return dispatch({
          type: actionTypes.FETCH_MEALS_BY_CATEGORY_SUCCESS,
          payload: res.data.meals,
        });
      })
      .catch((error) => {
        return dispatch({
          type: actionTypes.FETCH_MEALS_BY_CATEGORY_FAILURE,
          payload: error,
        });
      });
  };
};

//selected  meal request
export const fetchMeal = (name) => {
  return function (dispatch) {
    //for showing fetching icon
    dispatch({ type: actionTypes.FETCH_MEAL_REQUEST });

    //fetching execution
    axios
      .get(`${MEAL_URL}${name}`)
      .then((res) => {
        return dispatch({
          type: actionTypes.FETCH_MEAL_SUCCESS,
          payload: res.data.meals[0],
        });
      })
      .catch((error) => {
        return dispatch({
          type: actionTypes.FETCH_MEAL_FAILURE,
          payload: error,
        });
      });
  };
};
