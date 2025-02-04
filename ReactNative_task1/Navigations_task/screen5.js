import react from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const Screen5 = () => {
    const Navigation = useNavigation();
    const Fun1 = () => {
        Navigation.navigate('Profile1');
    }
    return(
        <View style={{height:'100%',alignItems:'center',justifyContent:'center'}} >
            <Text>Click here for profile page</Text>
        <Button mode="contained" onPress={Fun1} >Click here</Button>
        </View>
    )
}

export default Screen5;