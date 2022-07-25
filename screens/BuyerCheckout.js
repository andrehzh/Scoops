import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function BuyerCheckout( {navigation} ) {
  return (
    <View style = {styles.Container}>
        <Text style = {styles.text2}>Check Out</Text>
        <TextInput
            style = {styles.input}
            placeholder = "Credit card number"
        />
        <TextInput
            style = {styles.input}
            placeholder = "Expiry date"
        />
        <TextInput
            style = {styles.input}
            placeholder = "CVV"
        />
        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => {navigation.navigate("BuyerConfirmation")}}>
            <Text style = {styles.text}>Confirm Payment</Text>
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
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    marginBottom: 7
  },
});

