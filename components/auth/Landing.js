import React from 'react'
import { Text, View, Button, Image } from 'react-native'

export default function Landing({ navigation }) {
  return (
      // centralise text on landing page
    <View style ={{flex: 1, justifyContent: 'center', backgroundColor: "white"}}>  
        <Image
            style = {{width: 200, height: 200, alignSelf: 'center'}}
            resizeMode = "contain"
            source = {require('../../assets/logo.png')}/>
        <Button 
            title = "Register"
            onPress = {() => navigation.navigate("BuyerSeller")}
            color = "teal"
            /> 
        <Button 
            title = "Log In"
            onPress = {() => navigation.navigate("LogIn")}
            color = "teal"/>
    </View>
  )
}
