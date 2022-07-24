import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

export default function BuyerConfirmation() {
  return (
    <Text style = {{ fontSize: 25, fontWeight: "bold", alignSelf: "center", marginTop: 100, marginLeft: 20,}}>
        Your order has been succesfully placed!
    </Text>
  )
}
