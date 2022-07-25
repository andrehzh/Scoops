import { View, Text, Image} from 'react-native'
import React from 'react'

//Get information from current user

export const shopBackendInfo = 
    {
        name: 'Andre Cake Shop teehee',
        image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*',
        // reviews: "99",
        // rating: "4.5",
        categories: [{ title: "Cakes" }],
    }

export default function SellerAbout(props) {
    const { name, image, reviews, rating, categories } = shopBackendInfo;
    
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    
    const description = `${formattedCategories}
    • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <ShopImage image = {image}/>
            <Text
                style={{
                    fontSize: 29,
                    fontWeight: "600",
                    marginTop: 10,
                    marginHorizontal: 9,
                }}
            > This is your Shop !!!! 
            </Text>
            <ShopName name = {name}/>
            <ShopDescription description = {description}/>
        </View>
    )
}

const ShopImage = (props) => (
    <Image source = {{uri: props.image}} 
    style = {{ width: "100%", height: 180}} />
)

const ShopName = (props) => (
    <Text 
        style = {{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15, 
        }} 
    > 
    {props.name} </Text>
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