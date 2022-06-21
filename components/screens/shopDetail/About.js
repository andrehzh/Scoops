import { View, Text, Image} from 'react-native'
import React from 'react'

//information hardcoded in
const image =
    'https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*';

const title = 'Andre Cake Shop'
const description = 'test . test on test . $$'

export default function About() {
    return (
        <View>
            <RestrauntImage image = {image}/>
            <RestrauntTitle title = {title}/>
            <RestrauntDescription description = {description}/>
        </View>
    )
}

const RestrauntImage = (props) => (
    <Image source = {{uri: props.image}} 
    style = {{ width: "100%", height: 180}} />
)

const RestrauntTitle = (props) => (
    <Text 
        style = {{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15, 
        }} 
    > 
    {props.title} </Text>
) 

const RestrauntDescription = (props) => (
    <Text style = {{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}
    >
    {props.description}</Text>
)