import { View, Text } from 'react-native'
import React from 'react'
import About from './About'
import { Divider } from 'react-native-elements'
import ShopItems from './ShopItems'

export default function shopDetail({route}) {
  return (
    <View>
      <About route={route} />
      <Divider width = {1.8} style = {{ marginVertical: 20 }} />
      <ShopItems/>
    </View>
  )
}