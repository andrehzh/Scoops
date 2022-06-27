import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function BuyerSeller({ navigation }) {
  return (
      // centralise text on Register page
    <View style = {styles.Container}>  
        <Image
            style = {{width: 300, height: 300, alignSelf: 'center'}}
            resizeMode = "contain"
            source = {require('../../assets/logo.png')}/>

        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate("BuyerRegister")}>
            <Text style = {styles.text}>Buyer</Text>
        </TouchableOpacity> 

        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate("SellerRegister")}>
            <Text style = {styles.text}>Seller</Text>
        </TouchableOpacity> 
    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  button: {
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    backgroundColor: 'teal',
    marginBottom: 10
  },
  text: {
    color: "white",
    fontSize: 15
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20
  }
});
