import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const MealDetailScreen = (props) => {
  const meal = props.navigation.getParam("meal");

  return (
    <View style={styles.screen}>
      <View>
        <Text>{meal.title}</Text>
      </View>
      <Text>{meal.ingredients}</Text>
      <Text>{meal.steps}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const meal = navigationData.navigation.getParam("meal");
  return {
    title: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
