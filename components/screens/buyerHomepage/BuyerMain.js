import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from './HeaderTabs'
import BottomTabs from './BottomTabs'
import SearchBar from './SearchBar'
import Categories from './Categories'
import Products, { products } from './Products'
import { Divider } from 'react-native-elements'

export default function BuyerMain() {
  const [productData, setProductData] = React.useState(products)
  //const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <SafeAreaView style = {{backgroundColor: 'white', flex: 1}}>
      <View style = {{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Categories/>
        <Products productData = {productData} />
      </ScrollView>
      <Divider width = {1} />
      <BottomTabs/>
    </SafeAreaView>
  )
}
