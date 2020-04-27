import React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const CategoriesMealsScreen = props=>{
    return(
        <View style={styles.screen}>
            <Text>CategoriesMealsScreen Screen</Text>
            <Button title="Go to Meal Detail" onPress={()=>{ props.navigation.navigate({routeName:'Mealdetail'})}}/>
        </View>

    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default CategoriesMealsScreen;