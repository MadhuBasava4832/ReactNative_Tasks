import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Thub from '../assets/thub_photos/technicalhub.png'

const Thub2blocks = () => {

    return (
        <>
            <SafeAreaView>
                <View style={{ borderWidth: 1, flex: 1, display:"flex",alignItems:"center",justifyContent:"center" }}>

                    <View style={thubsty.firstb}>
                        <Image style={{ width: "100%",height:"100%"}} source={Thub} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const thubsty = StyleSheet.create({
    firstb: {
        borderWidth: 1,
        // height: "fit-content",
        height:50,
        width:"50%",
    
    }
})
export default Thub2blocks;
