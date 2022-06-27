import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        Image: require("../../assets/bakery-icon.png"),
        text: "Bakery"
    },
    {
        Image: require("../../assets/food-icon.webp"),
        text: "Food"
    },
    {
        Image: require("../../assets/clothes-icon.png"),
        text: "Clothes"
    },
    {
        Image: require("../../assets/coffee-icon.png"),
        text: "Drinks"
    },
    {
        Image: require("../../assets/others-icon.jpeg"),
        text: "Others"
    },
];

export default function Categories() {
  return (
      <View style = {{
          marginTop: 5,
          backgroundColor: "white",
          paddingVertical: 10,
          paddingLeft: 20,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator = { false }>
            {items.map((item, index) => (
             <View key = {index} style = {{ alignItems: "center", marginRight: 30}}>
                <Image 
                    source = {item.Image} 
                    style = {{
                    width: 50,
                    height: 40,
                    resizeMode: "contain",
            }}/>
                <Text style = {{ fontSize: 13, fontWeight: "700"}}>{item.text}</Text>
            </View>
            ))}
        </ScrollView>
    </View>
  )
}