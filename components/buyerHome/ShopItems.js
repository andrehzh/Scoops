import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from '../../firebase'

//all of the shops must be taken and pulled here.

export const shops = [
    // {
    //     name: "Amy's Cake Shop",
    //     image_url: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*",
    //     categories: ["Bakery"],
    //     price: "$$"
    // },
    // {
    //     name: "Another Cake Shop",
    //     image_url: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*",
    //     categories: ["Bakery"],
    //     price: "$$"
    // },
    // {
    //     name: "Clothes & Co.",
    //     image_url: "https://static.onecms.io/wp-content/uploads/sites/34/2022/03/02/new-clothes-clothing-rack-getty-0222-2000.jpg",
    //     categories: ["Clothes"],
    //     price: "$$"
    // },
    // {
    //     name: "Nuri's Nasi Lemak",
    //     image_url: "https://lavendernasilemak.sg/wp-content/uploads/2021/09/nasi.-1170x725.jpg",
    //     categories: ["Food"],
    //     price: "$$"
    // },
    // {
    //     name: "My House Cafe",
    //     image_url: "https://images.medicinenet.com/images/article/main_image/what-has-more-caffeine-coffee-or-tea.jpg",
    //     categories: ["Drinks"],
    //     price: "$$"
    // }
]

export default function ShopItems({ navigation, ...props }) {
    const [shops, setShops] = useState([])

    useEffect(() => {
        firebase.firestore().collection('shops')
          .onSnapshot(snapshot => {
            setShops(snapshot.docs.map(doc => doc.data()))
          })
      }, [])
    
    return (
        <>
            {shops.map((shop, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 30 }}
                    onPress={() => 
                        navigation.navigate("ShopDetail", {
                            name: shop.name,
                            image: shop.image_url,
                            price: shop.price,
                        })
                    }
                >
                    <View
                        key={index}
                        style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <ShopImage image={shop.image_url} />
                        <ShopInfo name={shop.name} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const ShopImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image,
            }}
            style={{ width: "100%", height: 180 }} />

        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
        </TouchableOpacity>
    </>
)

const ShopInfo = (props) => (
    <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>{props.name} </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>
)



