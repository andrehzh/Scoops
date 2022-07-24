import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import AddItem from '../components/sellerComponents/AddItem';
import SellerBottomTabs from '../components/sellerHome/SellerBottomTabs'

export default function SellerAdd({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between' }}>
      <ScrollView>
        <AddItem />
      </ScrollView>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <SellerBottomTabs navigation={navigation}/>
    </SafeAreaView>
  )
}