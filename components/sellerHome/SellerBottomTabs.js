import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native';

export default function BottomTabs() {
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-evenly"
        }}>
            <Icon icon="home" text="Home" />
            <Icon
                icon="plus-square"
                text="Add"
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