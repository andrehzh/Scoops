import React from 'react'
import { Text, View, Button } from 'react-native'

export default function BuyerSeller({ navigation }) {
  return (
      // centralise text on Register page
    <View style ={{flex: 1, justifyContent: 'center'}}>  
        <Button 
            title = "Buyer"
            onPress = {() => navigation.navigate("BuyerRegister")}/> 
        <Button 
            title = "Seller"
            onPress = {() => navigation.navigate("SellerRegister")}/>
    </View>
  )
}
