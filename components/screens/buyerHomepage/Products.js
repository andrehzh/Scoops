import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import shopDetail from '../shopDetail/ShopDetail'

export default function Products({ navigation, ...props }) {
  return (
    <>
          {props.productData.map((product, index) => (
              <TouchableOpacity
                  activeOpacity={1}
                  style={{ marginBottom: 30 }}
                  onPress={() => navigation.navigate("ShopDetail", {
                    //   name: shop.name,
                    //   image: shop.image_url,
                    //   price: shop.price,
                    //   reviews: shop.review_count,
                    //   rating: shop.rating,
                    //   categories: shop.categories,
                  })
                }
              >
            <View 
                key = {index}
                style = {{marginTop: 10, padding: 15, backgroundColor: "white"}}>
                <ProductImage image = {product.image_url}/>
                <ProductInfo name = {product.name}/>
            </View>
            </TouchableOpacity>
        ))}
    </>
  )
}

const ProductImage = (props) => (
    <>
    <Image
        source = {{
            uri: props.image,
        }}
        style = {{ width: "100%", height: 180 }}/>

    <TouchableOpacity style = {{position: 'absolute', right: 20, top: 20}}>
        <MaterialCommunityIcons name = "heart-outline" size = {25} color = "white"/>
    </TouchableOpacity>
    </>
)

const ProductInfo = (props) => (
    <View>
        <Text style = {{fontSize: 18, fontWeight: "bold", marginTop: 8}}>{ props.name} </Text>
        <Text style = {{fontSize: 13, color: "gray"}}>30-45 min</Text>
    </View>
)

export const products = [
    {
        name: "Amy's Cake Shop",
        image_url: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x800/landscape-1474650684-cakes-group-193.jpg?resize=980:*",
        categorties: ["Bakery"],
        price: "$$"
    },
    {
        name: "Clothes & Co.",
        image_url: "https://static.onecms.io/wp-content/uploads/sites/34/2022/03/02/new-clothes-clothing-rack-getty-0222-2000.jpg",
        categorties: ["Clothes"],
        price: "$$"
    },
    {
        name: "Nuri's Nasi Lemak",
        image_url: "https://lavendernasilemak.sg/wp-content/uploads/2021/09/nasi.-1170x725.jpg",
        categorties: ["Food"],
        price: "$$"
    },
    {
        name: "My House Cafe",
        image_url: "https://images.medicinenet.com/images/article/main_image/what-has-more-caffeine-coffee-or-tea.jpg",
        categorties: ["Drinks"],
        price: "$$"
    }
]