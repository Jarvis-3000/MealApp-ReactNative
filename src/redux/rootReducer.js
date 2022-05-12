import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { mealReducer } from "./Meal/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  meal: mealReducer,
});

export default rootReducer;
