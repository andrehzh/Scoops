import { View, Text, SafeAreaView, ScrollView, Platform } from 'react-native'
import React from 'react'
import About from '../components/shopDetail/About'
import { Divider } from 'react-native-elements'
import ProductItems from '../components/shopDetail/ProductItems'
import ViewCart from '../components/shopDetail/ViewCart'
import firebase from '../firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { Provider } from 'react-redux'
require("firebase/firestore");
require("firebase/storage");
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import rootReducer from '../redux/reducers';

const Store = createStore(rootReducer, applyMiddleware(thunk));

// items hardcoded the shop which is clicked on items
export const goods = [
  {
      title: "chocolatecake",
      description: "cake of chocolate, made with chocolate",
      price: "$10.10",
      image:
          "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
  },
  {
      title: "cheesecake",
      description: "cake of cheese, made with cheesy cheese",
      price: "$22.10",
      image:
          "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
  },
  {
      title: "uglyasscake",
      description: "ugly ass cake",
      price: "$0.30",
      image:
        "https://firebasestorage.googleapis.com/v0/b/scoops-6b1da.appspot.com/o/pictures%2F7re5iCkWw3hjIJF2kG6Amrv2XVp2%2F0.rexix17z2n?alt=media&token=a8f880df-2212-4332-a207-c3e2f40fde83",
  }, 
  {
      title: "chococake 1",
      description: "again cake of chocolate, made with chocolate",
      price: "$10.10",
      image:
          "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg?im=Resize=(986)",
  },
  {
      title: "cheesecake 2",
      description: "again cake of cheese, made with cheesy cheese",
      price: "$22.10",
      image:
          "https://media.istockphoto.com/photos/cheesecake-slice-new-york-style-classical-cheese-cake-picture-id1167344045?k=20&m=1167344045&s=612x612&w=0&h=y-dYuj5D2v_narosVM-mGDXFXbjpMKCS_8VlEE79tG4=",
  },
  {
      title: "uglycake 10000",
      description: "again ugly ass cake",
      price: "$0.10",
      image:
      "https://firebasestorage.googleapis.com/v0/b/scoops-6b1da.appspot.com/o/pictures%2F7re5iCkWw3hjIJF2kG6Amrv2XVp2%2F0.rexix17z2n?alt=media&token=a8f880df-2212-4332-a207-c3e2f40fde83",
  }
];

export default function ShopDetail({ route, navigation }) { 
  return (
    <Provider store={Store}>
    <SafeAreaView style = {{backgroundColor: 'white', flex: 1}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
        <ScrollView showsVerticalScrollIndicator = {false}>
          <ProductItems shopName={route.params.name} goods={goods}/>
          <ViewCart navigation={navigation} />
        </ScrollView>
    </SafeAreaView>
    </Provider>
  )
}

