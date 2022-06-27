import { View, Text, Image} from 'react-native'
import React from 'react'

//information hardcoded in

const shopBackendInfo = {
    title: 'Andre Cake Shop',
    image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*',
    reviews: "99",
    rating: "4.5",
    categories: [{ title: "Toys" }, { title: "Games" }],
};

const { title, image, reviews, rating, categories } = shopBackendInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories}
• 🎫 • ${rating} ⭐ (${reviews}+)`;

export default function About(props) {

    return (
        <View>
            <ShopImage image = {image}/>
            <ShopTitle title = {title}/>
            <ShopDescription description = {description}/>
        </View>
    )
}

const ShopImage = (props) => (
    <Image source = {{uri: props.image}} 
    style = {{ width: "100%", height: 180}} />
)

const ShopTitle = (props) => (
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

const ShopDescription = (props) => (
    <Text style = {{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    }}
    >
    {props.description}</Text>
)