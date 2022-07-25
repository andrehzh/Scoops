import { View, Text, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from '../../firebase'

//Get information from current user

export const shopBackendInfo = 
    {
        name: 'Smelly Cakes',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/24/34/c6/mandarin-cake-shop-bakery.jpg',
        reviews: "99",
        rating: "4.5",
        categories: [{ title: "Cakes" }],
    }

export default function SellerAbout() {
    const [shopInfo, setShopInfo] = useState({
        name: 'Please Edit Shop Name 🚧',
        image: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/960x0_54.jpg',
        reviews: "0.0",
        rating: "0.0",
        categories: [{ title: "Please Edit" }],
    })

    //big issue seller about not updated.
    // useEffect(() => {
    //     firebase.firestore().collection('shops').getDoc(doc => {
    //         console.log(doc.data())
    //     })
    // }, [])

    const { name, image, reviews, rating, categories } = shopBackendInfo;
    
    // const formattedCategories = categories.map((cat) => cat.title).join(" • ");
    
    // const description = `${formattedCategories}
    // • 🎫 • ${rating} ⭐ (${reviews}+)`;

    const description = `
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
            > This is your Shop 📍 
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