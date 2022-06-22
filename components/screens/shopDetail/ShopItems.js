import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
// import { ScrollView } from 'react-native-gesture-handler'

//items hardcoded
const items = [
    {
        title: "chocolatecake",
        description: "cake of chocolate, made with chocolate",
        price: "$10.10",
        image:
            "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
    },
    {
        title: "cheesecake",
        description: "cake of cheese, made with cheesy cheese",
        price: "$22.10",
        image:
            "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
    },
    {
        title: "uglyasscake",
        description: "ugly ass cake",
        price: "$0.10",
        image:
            "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/125865322_3944672392229403_874929528125186590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=waFlL4QqpHYAX-czuot&_nc_ht=scontent.fsin10-1.fna&oh=00_AT9dIvy032lhH0RnLa9ghYKTzhHJr4yE1kpFs5f0l7n77A&oe=62C9B9CB",
    }, {
        title: "chococake 1",
        description: "again cake of chocolate, made with chocolate",
        price: "$10.10",
        image:
            "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
    },
    {
        title: "cheesecake 2",
        description: "again cake of cheese, made with cheesy cheese",
        price: "$22.10",
        image:
            "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
    },
    {
        title: "uglycake 3",
        description: "again ugly ass cake",
        price: "$0.10",
        image:
            "https://scontent.fsin10-1.fna.fbcdn.net/v/t1.6435-9/125865322_3944672392229403_874929528125186590_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=waFlL4QqpHYAX-czuot&_nc_ht=scontent.fsin10-1.fna&oh=00_AT9dIvy032lhH0RnLa9ghYKTzhHJr4yE1kpFs5f0l7n77A&oe=62C9B9CB",
    }
]

//style dic
const styles = StyleSheet.create({
    shopItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

//menu
export default function ShopItems() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {items.map((items, index) => (
                <View key={index}>
                    <View style={styles.shopItemStyle}>
                        <ItemInfo items={items} />
                        <ItemImage items={items} />
                    </View>
                    <Divider 
                        width={0.5} 
                        orientation="vertical" 
                        style={{ marginHorizontal: 20 }}
                    />
                </View> 
            ))}
        </ScrollView>
    )
}

//constant item info
const ItemInfo = (props) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Text style = {styles.titleStyle}>{props.items.title}</Text>
        <Text>{props.items.description}</Text>
        <Text>{props.items.price}</Text>
    </View>
)

//constant itemImage
const ItemImage = (props) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Image 
        source={{uri: props.items.image}} 
        style={{width: 100, height: 100, borderRadius: 8,}}
        />
    </View>
) 