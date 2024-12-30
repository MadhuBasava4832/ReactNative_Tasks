import { FlatList, Image, ScrollView, StyleSheet, Text, View, } from "react-native";


const Cards = () => {

    const cards_data = [
        {
            Name: "Naruto",
            RollNo: "22A91A04D0",
            Branch: "ECE",
            College: "AEC",
            Email: "naruto@gmail.com",
            image_path: require("../assets/cards_photos/naruto(23).jpeg"),
        },
        {
            Name: "Luffy",
            RollNo: "2201",
            Branch: "ECE",
            College: "AEC",
            Email: "luffy@gmail.com",
            image_path: require('../assets/cards_photos/luffy01jpeg.jpeg'),
        },
        {
            Name: "Itachi",
            RollNo: "220006",
            Branch: "CSE",
            College: "AEC",
            Email: "itachi@gmail.com",
            image_path: require("../assets/cards_photos/itachi (16).jpeg"),
        },
        {
            Name: "Mikey",
            RollNo: "22008",
            Branch: "ECE",
            College: "AEC",
            Email: "mikey@gmail.com",
            image_path: require("../assets/cards_photos/mikey1.jpeg"),
        },
        {
            Name: "Kakashi",
            RollNo: "23005",
            Branch: "ECE",
            College: "AEC",
            Email: "kakashi@gmail.com",
            image_path: require("../assets/cards_photos/kakashi (14).jpeg"),
        },
        {
            Name: "Gojo",
            RollNo: "24004",
            Branch: "ECE",
            College: "AEC",
            Email: "gojo@gmail.com",
            image_path: require("../assets/cards_photos/gojo.jpeg"),
        },
    ]

    return (
        <View>
            <View style={cardsStyles.parent}>
                <View >
                    <Text style={cardsStyles.ch} >Anime characters</Text>
                </View>
                <View style={cardsStyles.chi}>
                    <ScrollView horizontal style={cardsStyles.scroll}>
                        <FlatList 
                            horizontal
                            scrollEnabled={false}
                            data={cards_data}
                            renderItem={({ item }) => (

                                <View style={cardsStyles.child}>
                                    <View style={cardsStyles.subchild1}>
                                        <Image source={item.image_path} style={{ width: '100%', height: '100%' }} />
                                    </View>
                                    <View style={cardsStyles.subchild2}>
                                        <View style={cardsStyles.subchild2_2}>
                                            <Text>
                                                <Text style={cardsStyles.properties} >Name : </Text>
                                                <Text style={cardsStyles.values} >{item.Name}</Text>
                                            </Text>
                                            <Text>
                                                <Text style={cardsStyles.properties} >Roll No : </Text>
                                                <Text style={cardsStyles.values} >{item.RollNo}</Text>
                                            </Text>
                                            <Text>
                                                <Text style={cardsStyles.properties} >Branch : </Text>
                                                <Text style={cardsStyles.values} >{item.Branch}</Text>
                                            </Text>
                                            <Text>
                                                <Text style={cardsStyles.properties} >College : </Text>
                                                <Text style={cardsStyles.values} >{item.College}</Text>
                                            </Text>
                                            <Text>
                                                <Text style={cardsStyles.properties} >Email : </Text>
                                                <Text style={cardsStyles.values} >{item.Email}</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                )} />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const cardsStyles = StyleSheet.create({
    parent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth:1,borderColor:'red',
        // backgroundColor:'#c9c9c9',
    },
    ch: {
        fontSize: 26,
        fontWeight: "bold",
        // color:'red',
    },
    chi: {
        width: 350,
        minHeight: '65%',
        // borderWidth:1,
        // borderColor:'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    child: {
        width: 320,
        height: 450,
        // borderWidth:1,
        // borderColor:'blue',
        position: 'relative',
        margin: 20,
        borderRadius: 25,
        backgroundColor: '#fafafa',
    },
    scroll: {
        width: 'auto',
        height: '500',
        // borderWidth:1,
    },
    subchild1: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: '100%',
        position: 'absolute',
        left: '50%',
        top: 20,
        transform: [{
            translateX: '-50%',
        },
        ],
        overflow: 'hidden',
        zIndex: 2,
    },
    subchild2: {
        width: 250,
        height: 350,
        position: 'absolute',
        top: 70,
        left: '50%',
        transform: [{
            translateX: '-50%',
        },],
        borderWidth: 1.5,
        borderRadius: 25,
        backgroundColor: '#ECECEC',
    },
    subchild2_2: {
        width: '100%',
        height: '80%',
        // borderWidth:3,
        marginTop: 50,
        display: 'flex',
        justifyContent: 'space-around',
        padding: 20,
    },
    properties: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    values: {
        fontSize: 16,
    },
})
export default Cards;