import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import SellerBottomTabs from '../components/sellerHome/SellerBottomTabs'
import { Divider } from 'react-native-elements'
import SellerAbout, { shopBackendInfo } from '../components/sellerHome/SellerAbout'
import SellerItems from '../components/sellerHome/SellerItems'
import firebase from '../firebase';

export default function SellerHome({ navigation }) {
    const [goods, setGoods] = useState([])

    useEffect(() => {
        firebase.firestore().collection('shops')
            .doc(firebase.auth().currentUser.email)
            .collection('products')
            .onSnapshot(snapshot => {
            setGoods(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between' }}>
            <View>
                <SellerAbout />
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
