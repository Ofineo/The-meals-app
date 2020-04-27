import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoriesMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        meal={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "Mealdetail",
            params: {
              meal: itemData.item,
            },
          });
        }}
      />
    );
  };
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  return {
    title: selectedCat.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CategoriesMealsScreen;
