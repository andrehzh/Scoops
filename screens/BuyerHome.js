import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/buyerHome/HeaderTabs'
import BottomTabs from '../components/buyerHome/BottomTabs'
import SearchBar from '../components/buyerHome/SearchBar'
import Categories from '../components/buyerHome/Categories'
import ShopItems, { shops } from '../components/buyerHome/ShopItems'
import { Divider } from 'react-native-elements'

export default function BuyerMain({ navigation }) {
  const [shopData, setShopData] = React.useState(shops)
  //const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <SafeAreaView style = {{backgroundColor: 'white', flex: 1}}>
      <View style = {{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator = {false}>
        <Categories/>
        <ShopItems shopData = {shopData} navigation = {navigation}/>
      </ScrollView>
      <Divider width = {1} />
      <BottomTabs/>
    </SafeAreaView>
  )
}
