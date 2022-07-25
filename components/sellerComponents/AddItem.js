import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
require("firebase/firestore");
require("firebase/storage");

//send to backend shops -> products

export default function AddItem(props) {
    const navigation = useNavigation();
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `pictures/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        console.log(childPath);

        const response = await fetch(uri);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob);


        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                saveProductData(snapshot);
                console.log(snapshot);
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }

    const saveProductData = (downloadURL) => {

        firebase.firestore()
            .collection('shops')
            .doc(firebase.auth().currentUser.uid)
            .collection("products")
            .add({
                title: productName,
                description: description,
                price: price,
                image: downloadURL,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            }).then((function () {
                navigation.navigate("SellerHome")
            }))
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>List a Product</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddPhoto")}>
                <View>
                    <FontAwesome5
                        name="camera"
                        size={25}
                        style={{
                            marginBottom: 3,
                            alignSelf: "center",
                        }} />
                    <Text>Change Image</Text>
                </View>
            </TouchableOpacity>

            <Text>Picture of Product</Text>
            <Image source={{ uri: props.route.params.image }} />

            <Text>Product Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                onChangeText={(productName) => setProductName(productName)}
            />

            <Text>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
                onChangeText={(description) => setDescription(description)}
            />

            <Text>Price</Text>
            <TextInput
                style={styles.input}
                placeholder="Price"
                onChangeText={(price) => setPrice(price)}
            />

            {/* <Text>Product Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Type"
            /> */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => uploadImage()}
            >
                <Text style={styles.text}>
                    List It!
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