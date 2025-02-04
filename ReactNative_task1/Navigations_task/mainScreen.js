import react from "react";
import { Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./screen1";
import Screen2 from "./screen2";


const MainScreen = () => {
    const {width,height} = Dimensions.get('screen');
    const Stack = createStackNavigator();
    return(
        <SafeAreaView style={{width:width,height:height}} >
            <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'green',
                        fontSize:20,
                        fontWeight:700
                    }
                }}

                >
                    <Stack.Screen
                    options={{headerShown:false}}
                    name="Screen1" component={Screen1} />
                    <Stack.Screen
                    options={{title:"Profile"}}
                    name="Profile1" component={Screen2} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default MainScreen;