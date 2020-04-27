import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        title: "Meal Categories",
      },
    },
    Categorymeals: {
      screen: CategoriesMealsScreen,
    },
    Mealdetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTitleStyle: {
        alignSelf: "center",
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
