import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Thub from '../assets/thub_photos/technicalhub.jpg';

// import Bellicon from 'react-native-vector-icons/Feather';
import Bellicon from 'react-native-vector-icons/FontAwesome';
import { Divider } from "react-native-paper";

const Thub2blocks = () => {
    const categoryitems = [
        {
            id: 1,
            icon: 'a1',
            iconname: 'iconname1',
        },
        {
            id: 2,
            icon: 'b1',
            iconname: 'iconname2',
        },
        {
            id: 3,
            icon: 'c1',
            iconname: 'iconname3',
        },
        {
            id: 4,
            icon: 'd1',
            iconname: 'iconname4',
        },
        {
            id: 1,
            icon: 'a1',
            iconname: 'iconname1',
        },
        {
            id: 2,
            icon: 'b1',
            iconname: 'iconname2',
        },
        {
            id: 3,
            icon: 'c1',
            iconname: 'iconname3',
        },
        {
            id: 4,
            icon: 'd1',
            iconname: 'iconname4',
        },
        {
            id: 1,
            icon: 'a1',
            iconname: 'iconname1',
        },
        {
            id: 2,
            icon: 'b1',
            iconname: 'iconname2',
        },
        {
            id: 3,
            icon: 'c1',
            iconname: 'iconname3',
        },
        {
            id: 4,
            icon: 'd1',
            iconname: 'iconname4',
        },
    ]

    return (
        <>
            <SafeAreaView>
                <View style={thubsty.firstblock}>
                    <View style={thubsty.firstsubbl}>
                        <Image style={thubsty.imagearrangement} source={Thub} />
                    </View>
                    <View style={thubsty.icons}>
                        <Bellicon name="bell" size={15} style={{padding:1}}  />
                    </View>
                </View>
                <Divider horizontalInset={true} />
                <Text style={thubsty.textstyles} >Welcome, Madhu </Text>

                <View style={thubsty.secblock}>
                    <View style={thubsty.imageblock} >
                        <Image source={require('../assets/thub_photos/animegirlimage.jpg')} style={thubsty.imagearrangement} />
                    </View>
                </View>

                <View style={thubsty.thirdblock} >
                    <View style={thubsty.textlinestyles} >
                        <Text style={thubsty.textstyles} >Categories</Text>
                        <Text style={thubsty.textstyles} >Less</Text>
                    </View>
                    <View style={thubsty.categitem}>

                        {categoryitems.map((item) => (
                            <>
                            <View style={{ borderWidth:1, display:'flex',alignItems:'center',justifyContent:'space-around'  }} >
                                <View style={thubsty.eachitemsty}>
                                    <Text key={item.id} >{item.icon}</Text>
                                </View>
                                <Text style={thubsty.textstyles2} key={item.id} >{item.iconname}</Text>
                            </View>
                            </>
                        ))}

                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}

const thubsty = StyleSheet.create({
    firstblock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    firstsubbl: {
        width: 200,
        height: 40,
    },
    imagearrangement: {
        width: '100%',
        height: '100%',
    },
    icons: {
        borderRadius:'100%',
        position: 'absolute',
        top: '30%',
        right: '8%',
    },
    textstyles: {
        color: 'green',
        fontWeight: 600,
        fontSize: 16,
        padding: 5,
    },
    textstyles2: {
        color: 'green',
        fontWeight: 500,
    },
    secblock: {
        width: 'auto',
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imageblock: {
        width: '90%',
        height: '85%',
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',

    },
    thirdblock: {
        borderWidth: 1,
        minHeight: 300,
    },
    textlinestyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categitem: {
        borderWidth: 1,
        padding:10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:10,
        flex:1,
    },
    eachitemsty: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
})
export default Thub2blocks;
