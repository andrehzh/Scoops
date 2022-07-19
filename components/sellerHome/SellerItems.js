import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

//style dic
const styles = StyleSheet.create({
    shopProductStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

//menu
//shopTitle notWorking
//the big issue is here
export default function SellerItems({ 
    shopName,
    goods,
    marginLeft, 
    }) {

    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            {goods.map((good, index) => (
                <View key={index}>
                    <View style={styles.shopProductStyle}> 
                        <GoodInfo good={good} />
                        <GoodImage good={good} marginLeft={marginLeft ? marginLeft : 0}/>
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
const GoodInfo = (props) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Text style = {styles.titleStyle}>{props.good.title}</Text>
        <Text>{props.good.description}</Text>
        <Text>{props.good.price}</Text>
    </View>
)

//constant itemImage
const GoodImage = ({ marginLeft, ...props }) => (
    <View style = {{ width: 240, justifyContent: "space-evenly" }}>
        <Image 
        source={{uri: props.good.image}} 
        style={{width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft,}}
        />
    </View>
)