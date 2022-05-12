import * as actionTypes from "./actionTypes.js";

const initialState = {
  mealCategories: {
    fetchState: 0,
    data: [],
  },
  mealsByCategory: {
    fetchState: 0,
    data: [],
  },
  meal:{
    fetchState:0,
    data:{},
  }
};

export function mealReducer(state = initialState, action) {
  switch (action.type) {
    //
    //categories
    case actionTypes.FETCH_MEAL_CATEGORIES_REQUEST:
      return {
        ...state,
        mealCategories: { ...state.mealCategories, fetchState: 1 },
      };

    case actionTypes.FETCH_MEAL_CATEGORIES_SUCCESS:
      return {
        ...state,
        mealCategories: {
          ...state.mealCategories,
          data: action.payload,
          fetchState: 2,
        },
      };

    case actionTypes.FETCH_MEAL_CATEGORIES_FAILURE:
      return {
        ...state,
        mealCategories: { ...state.mealCategories, fetchState: 3 },
      };

    //
    // selected category meals
    case actionTypes.FETCH_MEALS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        mealsByCategory: { ...state.mealsByCategory, fetchState: 1 },
      };

    case actionTypes.FETCH_MEALS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        mealsByCategory: {
          ...state.mealsByCategory,
          data: action.payload,
          fetchState: 2,
        },
      };

    case actionTypes.FETCH_MEALS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        mealsByCategory: {
          ...state.mealsByCategory,
          fetchState: 3,
        },
      };
      
    //
    // meal 
    case actionTypes.FETCH_MEAL_REQUEST:
      return {
        ...state,
        meal:{
          ...state.meal,
          fetchState:1
        }
      }

    case actionTypes.FETCH_MEAL_SUCCESS:
      return{
        ...state,
        meal:{
          ...state.meal,
          data:action.payload,
          fetchState:2
        }
      }

    case actionTypes.FETCH_MEAL_FAILURE:
      return{
        ...state,
        meal:{
          ...state.meal,
          fetchState:3
        }
      }

    default:
      return state;
  }
}
