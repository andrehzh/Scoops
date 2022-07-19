import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//touchableopacity/buttons not working...

export default function BottomTabs( navigation ) {

    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-evenly"
        }}>
            <Icon 
                icon="home" 
                text="Home"
                onPress={() => props.console.log("banana1")} 
            />
            <Icon
                icon="plus-square"
                text="Add"
                onPress={() => props.console.log("banana2")}
            />
            <Icon
                icon="align-justify"
                text="Edit"
                onPress={() => console.log("banana")}
            />
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
         <FontAwesome5 
            name = {props.icon}
            size = {25} 
            style = {{
                marginBottom: 3,
                alignSelf: "center",
            }}/>
        <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
)