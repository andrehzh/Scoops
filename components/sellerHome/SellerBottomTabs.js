import { View, Text, Button } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';

//touchableopacity/buttons not working...

export default function BottomTabs({ navigation }) {

    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-evenly"
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("SellerHome")}>
                <View>
                    <FontAwesome5
                        name="home"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("SellerAdd")}>
                <View>
                    <FontAwesome5
                        name="plus"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Add</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SellerEdit")}>
                <View>
                    <FontAwesome5
                        name="edit"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Edit</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
