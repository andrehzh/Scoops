import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SellerBottomTabs from '../components/sellerHome/SellerBottomTabs'
import { Divider } from 'react-native-elements'
import SellerAbout from '../components/sellerHome/SellerAbout'
import SellerItems from '../components/sellerHome/SellerItems'
import { goods } from './ShopDetail'

export default function SellerHome({ route, navigation }) {
    //imported from shop detail seller screen is j shop detail with buttons on the bottom
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
                <SellerAbout route={route} />
                <Divider width={1.8} style={{ marginVertical: 20 }} />
            </View>
            <ScrollView>
                <SellerItems shopTitle="help lah" goods={goods} />
            </ScrollView>
            <View
                style = {{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <SellerBottomTabs />
        </SafeAreaView>
    )
}
