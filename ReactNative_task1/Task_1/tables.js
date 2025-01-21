
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Cell, Row, Rows, Table, TableWrapper } from "react-native-table-component";


const Tablefunction = () => {
    const headerData = ["Name", "Roll No","Branch","College"];
    const rowsdata = [
        ["Naruto", "201","ECE","AEC"],
        ["Luffy", "301","ECE","AEC"],
        ["Mikey", "402","ECE","AEC"],
        ["Gojo", "502","ECE","AEC"],
        ["Gojo", "202","ECE","AEC"],
    ]
    return (
        <View style={tablestyles.main}>
            <StatusBar/>
            <View style={{width:350,height:"fit-content",}}>
                <Text style={{fontSize:25,fontWeight:900,textAlign:"center",}}>Table</Text>
                <ScrollView horizontal >
                    
                </ScrollView>
            </View>
        </View>
    )
}

const tablestyles = StyleSheet.create({
    main: {
        width:"100%",
        height:"100%",
        borderWidth: 2,
        borderColor:"red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    center:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    headersty: {
        fontSize: 18,
        fontWeight: 900,
        textAlign:"center",
    },
    rowsty: {
        fontSize: 16,
        textAlign:"center",
    },
    headerns:{
        width:700,
        backgroundColor:"#5EAE3E",
    },
    rowsns:{
        width:700,
    },
});

export default Tablefunction;

