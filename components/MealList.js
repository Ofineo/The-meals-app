import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from '../components/MealItem';

const MealList = (props) => {

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

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%" }}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    list: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
  });

export default MealList;
