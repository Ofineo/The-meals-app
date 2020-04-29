import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingindex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingindex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingindex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const newFav = state.favoriteMeals.concat(
          state.meals.find((meal) => meal.id === action.mealId)
        );
        return { ...state, favoriteMeals: newFav };
      }
    case SET_FILTERS:
      const updatedfilteredMeals = state.meals.filter((meal) => {
        if (action.filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (action.filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (action.filters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        if (action.filters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedfilteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
