import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import SellerBottomTabs from '../components/sellerHome/SellerBottomTabs'
import EditPage from '../components/sellerComponents/EditPage';

export default function SellerEdit( navigation ) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between' }}>
      <ScrollView>
        <EditPage />
      </ScrollView>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <SellerBottomTabs />
    </SafeAreaView>
  )
}