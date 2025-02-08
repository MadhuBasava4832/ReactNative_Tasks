import { View, Text, StyleSheet, Dimensions, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Thub from '../assets/thub_photos/technicalhub.jpg';
import Icons1 from 'react-native-vector-icons/AntDesign';

import Homeicons from "react-native-vector-icons/AntDesign";
import Bellicon from 'react-native-vector-icons/FontAwesome';
import { Button, Divider } from "react-native-paper";
import { useRef, useState } from "react";
import Changing from "../task_3/navigations_hooks";

const Thub2blocks = () => {

    const [homestatus, sethomestatus] = useState(true);
    const [eventstatus, seteventstatus] = useState(false);
    const [profilestatus, setprofilestatus] = useState(false);
    // const { width, height } = Dimensions.get('screen');
    const { width, height } = Dimensions.get('window');

    const categoryitems = [
        {
            icon: 'home',
            iconname: 'home',
        },
        {
            icon: 'setting',
            iconname: 'settings',
        },
        {
            icon: 'notification',
            iconname: 'notifications',
        },
        {
            icon: 'carryout',
            iconname: 'carryout',
        },
        {
            icon: 'idcard',
            iconname: 'idcards',
        },
        {
            icon: 'contacts',
            iconname: 'contacts',
        },
        {
            icon: 'dashboard',
            iconname: 'dashboard',
        },
        {
            icon: 'edit',
            iconname: 'edit',
        },
        {
            icon: 'menu-fold',
            iconname: 'menu-fold',
        },
        {
            icon: 'form',
            iconname: 'forms',
        },
        {
            icon: 'bulb1',
            iconname: 'ideas',
        },
        {
            icon: 'layout',
            iconname: 'layouts',
        },
    ]

    const flatlist = useRef(null)

    const [flag1, setflag1] = useState(true);
    const displayedItems = flag1 ? categoryitems.slice(0, 8) : categoryitems;


    const data1 = [
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/027/749/822/small_2x/lofi-image-for-background-generative-ai-photo.jpg"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/023/532/798/small_2x/generative-ai-an-neon-gamer-anime-fashion-boy-or-man-wearing-headphones-lost-in-his-music-abstract-background-that-evokes-the-feeling-of-different-genres-of-music-banner-music-concept-photo.jpg"
        },
        {
            image: "https://t4.ftcdn.net/jpg/08/39/80/81/360_F_839808191_8ohzkNonijNlK9m7vjP2lIppufywpJ0E.jpg",
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/044/524/344/non_2x/ai-generated-gamer-in-his-room-sketch-generative-ai-photo.jpg",
        },
        {
            image: "https://impeccablenestdesign.com/wp-content/uploads/2023/12/anime-girl-names-with-dark-meanings-choosing-the-perfect-name-for-your-character-6583089f4e8b2.jpg",
        },
    ];
    const [dot, setdot] = useState(0);
    const Fun = (event) => {
        const z1 = Math.round(event.nativeEvent.contentOffset.x / width);
        setdot(z1);
    }

    const eventsdata = [
        {
            image: 'https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg',
            eventname: 'Event 1',
            description: 'This event will start at February',
        },
        {
            image: "https://impeccablenestdesign.com/wp-content/uploads/2023/12/anime-girl-names-with-dark-meanings-choosing-the-perfect-name-for-your-character-6583089f4e8b2.jpg",
            eventname: 'Event 2',
            description: 'This event will start soon',
        },
    ]


    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ width: width, height: height }} >

                <View style={thubsty.bl1} >
                    <Text style={{ fontSize: 20, fontWeight: 600, color: 'green' }} >Header</Text>
                    <View style={thubsty.icons}>
                        <Bellicon name="bell" size={20} style={{ padding: 1, color: 'yellow' }} />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 2, borderBottomColor: 'green' }} ></View>


                {
                    homestatus ? (
                        <View style={thubsty.bl2} >
                            <ScrollView>


                                <Text style={thubsty.textstyles} >Welcome, Madhu </Text>

                                <View style={[thubsty.secblock, { width: width }]}>
                                    <View style={thubsty.imageblock} >
                                        <Image source={require('../assets/thub_photos/animegirlimage.jpg')} style={thubsty.imagearrangement} />
                                    </View>
                                </View>
                                {/* <Divider /> */}
                                <View style={thubsty.thirdblock} >
                                    <View style={thubsty.textlinestyles} >
                                        <Text style={thubsty.textstyles} >Categories</Text>
                                        <Button
                                            style={{ width: 100 }}
                                            onPress={() => setflag1(!flag1)}
                                        >
                                            {
                                                flag1 ?
                                                    <Text style={thubsty.textstyles} >More<Icons1 name="down" size={15} /></Text> :
                                                    <Text style={thubsty.textstyles} >Less<Icons1 name="up" size={15} /></Text>
                                            }
                                        </Button>
                                    </View>
                                    {/* <Divider horizontalInset={true} /> */}

                                    <View style={thubsty.categitem}>

                                        {displayedItems.map((item, index) => (
                                            <View key={index} style={{ minWidth: 70 }} >
                                                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                                                    <View style={thubsty.eachitemsty}>
                                                        <Icons1 name={item.icon} color={'white'} size={25} />
                                                    </View>
                                                    <Text style={thubsty.textstyles2}  >{item.iconname}</Text>
                                                </View>
                                            </View>
                                        ))}

                                    </View>
                                </View>
                                {/* <Divider /> */}


                                {/* <View style={{borderWidth:1,borderColor:'white',alignItems:'center',justifyContent:'center'}} >

                                    <FlatList
                                        data={data1}
                                        ref={flatlist}
                                        horizontal
                                        renderItem={({ item, index }) => (
                                            <View key={index} style={{borderWidth:1,borderColor:'white', height: 200, width: width, justifyContent: 'center', alignItems: 'center'}} >
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={thubsty.innerblock}
                                                />
                                            </View>
                                        )}
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled
                                        onScroll={(event) => Fun(event)}
                                        
                                    />
                                </View> */}

                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <FlatList
                                        data={data1}
                                        ref={flatlist}
                                        horizontal
                                        renderItem={({ item }) => (
                                            <View style={{ width, height: 200, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image source={{ uri: item.image }} style={thubsty.innerblock} />
                                            </View>
                                        )}
                                        showsHorizontalScrollIndicator={false}
                                        pagingEnabled
                                        onScroll={(event) => Fun(event)}
                                        getItemLayout={(data, index) => ({
                                            length: width,
                                            offset: width * index,
                                            index,
                                        })}
                                        snapToInterval={width} // Ensures smooth snapping
                                        snapToAlignment="start"
                                        decelerationRate="fast"
                                        contentContainerStyle={{ paddingHorizontal: 0 }} // Prevents extra space
                                    />
                                </View>


                                <View style={thubsty.dotsblock} >
                                    {data1.map((item, index) => (
                                        index == dot ?
                                            <View style={{ borderWidth: 1, backgroundColor: 'green', borderColor: 'green', padding: 3, margin: 5, borderRadius: "100%" }} key={index} ></View> :
                                            <View style={{ borderWidth: 1, backgroundColor: 'white', borderColor: 'white', padding: 1.5, margin: 5, borderRadius: "100%" }} key={index} ></View>
                                    ))}
                                </View>

                                <View style={[thubsty.secblock, { width: width }]}>
                                    <View style={thubsty.imageblock} >
                                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/044/524/344/non_2x/ai-generated-gamer-in-his-room-sketch-generative-ai-photo.jpg" }} style={thubsty.imagearrangement} />
                                    </View>
                                </View>

                            </ScrollView>

                        </View>) : (
                        <></>
                    )
                }


                {
                    eventstatus ? (
                        <View style={thubsty.bl2}>
                            {eventsdata.map((item, index) => {
                                return (
                                    <View key={index} style={thubsty.imagestyles}
                                        onTouchStart={() => { alert(`${item.eventname} ${item.description} `) }}

                                    >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={thubsty.imagestylings}
                                        />
                                        <Text style={thubsty.eventtext} >{item.eventname}</Text>
                                        <Text style={thubsty.eventtext2} >{item.description}</Text>
                                    </View>
                                )
                            })}


                        </View>
                    ) : (
                        <></>
                    )
                }


                {
                    profilestatus ? (
                        <View style={thubsty.bl2}>
                            <ScrollView>
                                <View style={{ minHeight: 580, alignItems: 'center', justifyContent: 'center' }} >
                                    <View style={{ width: 250, height: 400,  justifyContent:'center' }} >
                                        <View style={thubsty.profilesty} >
                                            <Image source={{ uri: "https://i.pinimg.com/originals/01/6b/05/016b0584784f6f7881648330f9d24e11.jpg" }} style={{ width: "100%", height: '100%', }} resizeMode="cover" />
                                        </View>
                                        <View style={thubsty.profiletextst} >
                                            <Text style={{ textAlign: 'center' }} >
                                                <Text style={thubsty.profiletextstylings1} >Name : </Text>
                                                <Text style={thubsty.profiletextstylings2} >Madhu</Text>
                                            </Text>
                                            <Text style={{ textAlign: 'center' }} >
                                                <Text style={thubsty.profiletextstylings1} >Roll No : </Text>
                                                <Text style={thubsty.profiletextstylings2} >22A91A04D0</Text>
                                            </Text>
                                            <Text style={{ textAlign: 'center' }} >
                                                <Text style={thubsty.profiletextstylings1} >Email : </Text>
                                                <Text style={thubsty.profiletextstylings2} >madhubasava32@gmail.com</Text>
                                            </Text>
                                        </View>
                                    </View>
                                </View>


                            </ScrollView>
                        </View>
                    ) : (
                        <></>
                    )
                }




                <View style={{ borderBottomWidth: 2, borderBottomColor: 'green' }} ></View>
                <View style={thubsty.bl3} >


                    <View style={thubsty.icontext} >
                        <View style={thubsty.iconstyles} onTouchStart={() => {
                            sethomestatus(true)
                            seteventstatus(false)
                            setprofilestatus(false)
                            console.log(homestatus);
                        }}  >
                            <Homeicons name="home" size={20} color={'white'} />
                        </View>
                        <Text style={thubsty.textstyles1} >Home</Text>
                    </View>
                    <View style={thubsty.icontext} >
                        <View style={thubsty.iconstyles} onTouchStart={() => {
                            seteventstatus(true)
                            sethomestatus(false)
                            setprofilestatus(false)
                        }}  >
                            <Homeicons name="calendar" size={20} color={'white'} />
                        </View>
                        <Text style={thubsty.textstyles1} >Events</Text>
                    </View>
                    <View style={thubsty.icontext} >
                        <View style={thubsty.iconstyles} onTouchStart={() => {
                            setprofilestatus(true)
                            sethomestatus(false)
                            seteventstatus(false)
                        }}  >
                            <Homeicons name="user" size={20} color={'white'} />
                        </View>
                        <Text style={thubsty.textstyles1} >Profile</Text>
                    </View>
                </View>




            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const thubsty = StyleSheet.create({


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
        flex: 1.2,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    iconstyles: {
        borderWidth: 1,
        borderColor: 'white',
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
    imagestylings: {
        width: "90%",
        height: "90%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray',
        opacity: 0.6,
    },




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
        borderRadius: '100%',
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: '-50%' }],
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
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    imageblock: {
        width: '90%',
        height: '85%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
        overflow: 'hidden',

    },
    thirdblock: {
        // minHeight: 300
    },
    textlinestyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categitem: {
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: 10, padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    eachitemsty: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        // borderRadius: '100%',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'green',
    },






    cards1: {
        width: 360,
        height: 200,
        backgroundColor: "black",
        color: 'white',

    },
    dotsblock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textstyles4: {
        fontSize: 32,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    innerblock: {
        width: '90%',
        height: '90%',
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 15,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // innerblock: {
    //     width: '90%',
    //     height: '90%',
    //     borderWidth: 1,
    //     borderColor: "gray",
    //     borderRadius: 15,
    //     backgroundColor: 'green',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },

    eventtext: {
        position: 'absolute',
        color: 'white',
        fontSize: 28
    },
    eventtext2: {
        width: '90%',
        height: '20%',
        position: 'absolute',
        bottom: '5%',
        color: 'white',
        paddingLeft: 10
    },
    profilesty: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: '100%',
        left: '50%',
        overflow: 'hidden',
        transform: [
            { translateX: '-50%' }
        ],
    },
    profiletextst: {
        width: 250,
        minHeight: 150,
        justifyContent: 'space-around',
        // borderWidth: 1,
        // borderColor: 'white',
    },
    profiletextstylings1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 500,
    },
    profiletextstylings2: {
        color: 'white'
    },
})
export default Thub2blocks;
