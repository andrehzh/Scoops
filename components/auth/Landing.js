import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'

export default function Landing({ navigation }) {
  return (
      // centralise text on landing page
    <View style = {styles.Container}>  
        <Image
            style = {{width: 300, height: 300, alignSelf: 'center'}}
            resizeMode = "contain"
            source = {require('../../assets/logo.png')}/>
        
        <Text style = {styles.text2}>Log in for existing users. {'\n'} Sign up for new users.</Text>

        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate("BuyerSeller")}>
            <Text style = {styles.text}>Register</Text>
        </TouchableOpacity> 

        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate("LogIn")}>
            <Text style = {styles.text}>Log In</Text>
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
    paddingVertical: 15,
    paddingHorizontal: 12,
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
