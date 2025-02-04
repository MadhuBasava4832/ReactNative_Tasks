import react from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen6 from "./screen6";
import Screen7 from "./screen7";


const Screen2 = () => {
    const TOPBar = createMaterialTopTabNavigator();
    return(
        <TOPBar.Navigator
        screenOptions={{
            tabBarActiveTintColor:'green',
            tabBarInactiveTintColor:'black',
            tabBarIndicatorStyle:{
                backgroundColor:'green',
                height:3
            },
            tabBarLabelStyle:{
                fontSize:18
            },
            tabBarPressColor:'#098500'
        }}
        >
        <TOPBar.Screen name="Chats" component={Screen6} />
        <TOPBar.Screen name="Status" component={Screen7} />
        </TOPBar.Navigator>
    )
}

export default Screen2;