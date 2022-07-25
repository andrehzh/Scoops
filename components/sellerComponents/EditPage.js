import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React from 'react'


//send to backend -> shops

export default function EditPage() {
    return (
        <SafeAreaView>
            <Text>Edit Shop Page</Text>
            <Text>Picture of Shop</Text>
            <Icon icon="camera" />
            <Text>Shop Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Shop Name"
            />
            <Text>Shop Category</Text>
            <TextInput
                style={styles.input}
                placeholder="Shop Category"
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

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)

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