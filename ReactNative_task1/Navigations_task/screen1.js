import react, { Profiler } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen3 from "./screen3";
import Screen4 from "./screen4";
import Screen5 from "./screen5";
import Icon1 from 'react-native-vector-icons/Ionicons'


const Screen1 = () => {
    const BottomBar = createBottomTabNavigator();
    return (
        <BottomBar.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'green', // Active tab color
    tabBarInactiveTintColor: 'black', // Inactive tab color
    tabBarIcon: ({ focused, color }) => {
      let IconName;
      if (route.name === "Menu") {
        IconName = focused ? "menu-sharp" : "menu-outline";
      } else if (route.name === "Home") {
        IconName = focused ? "home-sharp" : "home-outline";
      } else if (route.name === "Profile") {
        IconName = focused ? "person-sharp" : "person-outline";
      }
      return <Icon1 name={IconName} size={24} color={color} />;
    },
    tabBarStyle: {
      height: 70,
      backgroundColor: 'white', // Set background color if needed
    },
    tabBarLabelStyle: {
      fontSize: 16,
    },
    tabBarPressColor: 'lightgreen', // Press ripple effect for Android
    tabBarPressOpacity: 0.5, // Press opacity effect for iOS
  })}
>

            <BottomBar.Screen name="Menu" component={Screen3} />
            <BottomBar.Screen name="Home" component={Screen4} />
            <BottomBar.Screen name="Profile" component={Screen5} />
        </BottomBar.Navigator>
    )
}

export default Screen1;