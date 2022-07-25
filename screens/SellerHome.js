import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import SellerBottomTabs from '../components/sellerHome/SellerBottomTabs'
import { Divider } from 'react-native-elements'
import SellerAbout, { shopBackendInfo } from '../components/sellerHome/SellerAbout'
import SellerItems from '../components/sellerHome/SellerItems'
import { goods } from './ShopDetail'
import firebase from '../firebase';

export default function SellerHome({ navigation }) {
    useEffect(() => {
        firebase.firestore().collection('shops').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
        firebase.firestore().collectionGroup('products').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    //imported from shop detail seller screen is j shop detail with buttons on the bottom
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between' }}>
            <View>
                <SellerAbout route={shopBackendInfo}/>
                <Divider width={1.8} style={{ marginVertical: 20 }} />
            </View>
            <ScrollView>
                <SellerItems shopName="filler" goods={goods} />
            </ScrollView>
            <View
                style = {{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <SellerBottomTabs navigation={navigation}/>
        </SafeAreaView>
    )
}
