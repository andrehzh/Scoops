import { View, Text, Button } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';
import firebase from '../../firebase';
import * as Updates from 'expo-updates';

//touchableopacity/buttons not working...

export default function BottomTabs({ navigation }) {
    const handleSignout = async () => {
        try {
            firebase.auth().signOut()
            console.log('Signed Out!')
        } catch (error) {
            console.log(error)
        }
    }

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
            
            <TouchableOpacity onPress={() => navigation.navigate("AddPhoto")}>
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

            <TouchableOpacity>
                <View>
                    <FontAwesome5
                        name="times"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Logout</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
