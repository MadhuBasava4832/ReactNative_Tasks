import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Homeicons from "react-native-vector-icons/AntDesign";


const Changing = () => {
    const { width, height } = Dimensions.get('screen');
    console.log(width, height);


    return (
        <>
            <SafeAreaView style={{ width: width, height: height }} >
                <View style={mystyles.bl1} >
                    <Text style={{ fontSize: 20, fontWeight: 600, color: 'green' }} >Header</Text>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: 'green' }} ></View>

                <View style={mystyles.bl2} >
                    <ScrollView>

                        <View>
                            <View style={mystyles.imagestyles} > <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg" }} style={{ width: "90%", height: "90%", borderRadius: 12, }} /> </View>
                            <View style={mystyles.imagestyles} > <Image source={{ uri: "https://impeccablenestdesign.com/wp-content/uploads/2023/12/anime-girl-names-with-dark-meanings-choosing-the-perfect-name-for-your-character-6583089f4e8b2.jpg" }} style={{ width: "90%", height: "90%", borderRadius: 12, }} /> </View>
                            <View style={mystyles.imagestyles} > <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/023/532/798/small_2x/generative-ai-an-neon-gamer-anime-fashion-boy-or-man-wearing-headphones-lost-in-his-music-abstract-background-that-evokes-the-feeling-of-different-genres-of-music-banner-music-concept-photo.jpg" }} style={{ width: "90%", height: "90%", borderRadius: 12, }} /> </View>
                            <View style={mystyles.imagestyles} > <Image source={{ uri: "https://t4.ftcdn.net/jpg/08/39/80/81/360_F_839808191_8ohzkNonijNlK9m7vjP2lIppufywpJ0E.jpg" }} style={{ width: "90%", height: "90%", borderRadius: 12, }} /> </View>
                        </View>
                        <View style={mystyles.events} ></View>

                    </ScrollView>
                </View>

                <View style={{ borderBottomWidth: 2, borderBottomColor: 'green' }} ></View>
                <View style={mystyles.bl3} >


                    <View style={mystyles.icontext} >
                        <View style={mystyles.iconstyles} onTouchStart={() => { alert("home page") }} > <Homeicons name="home" size={20} />   </View>  <Text style={mystyles.textstyles1} >Home</Text>
                    </View>
                    <View style={mystyles.icontext} >
                        <View style={mystyles.iconstyles} onTouchStart={() => { alert("Events page") }}  > <Homeicons name="calendar" size={20} /> </View>  <Text style={mystyles.textstyles1} >Events</Text>
                    </View>
                    <View style={mystyles.icontext} >
                        <View style={mystyles.iconstyles} onTouchStart={() => { alert("Profile page") }}  > <Homeicons name="user" size={20} /> </View>  <Text style={mystyles.textstyles1} >Profile</Text>
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

const mystyles = StyleSheet.create({
    bl1: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    bl2: {
        flex: 10,
        borderWidth: 1,
        backgroundColor: 'black',
    },
    bl3: {
        flex: 1,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    iconstyles: {
        borderWidth: 1,
        width: 35,
        height: 35,
        borderRadius: "100%",
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textstyles1: {
        color: 'green',
    },
    icontext: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imagestyles: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
    },
    events: {

    },
})
export default Changing;