import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React, { useState } from 'react'
import firebase from '../../firebase'


//send to backend -> shops

export default function EditPage({ navigation }) {
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])

    const makeShop = () => {

        firebase.firestore()
            .collection('shops')
            .doc(firebase.auth().currentUser.email)
            .set({
                image_url: image,
                name: name,
                categories: categories,
            }).then((function () {
                navigation.navigate("SellerHome", {
                    image: image,
                    name: name,
                    categories: categories,
                })
            }))
    }

    return (
        <SafeAreaView>
            <Text>Edit Shop Page</Text>
            {/* <Text>Picture of Shop</Text>
            <TextInput
                style={styles.input}
                placeholder="Picture URL"
                onChangeText={(image) => setImage(image)}
            /> */}
            <Text>Shop Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Shop Name"
                onChangeText={(name) => setName(name)}
            />
            <Text>Shop Category</Text>
            <TextInput
                style={styles.input}
                placeholder="Shop Category"
                onChangeText={(categories) => setCategories(categories)}
            />
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.text}>
                    Save Changes!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    button: {
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'teal',
        marginBottom: 10
    },
    text: {
        color: "white",
        fontSize: 15
    },
    text2: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 20
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 2,
        padding: 20,
        alignItems: 'center',
        marginBottom: 20
    },
});