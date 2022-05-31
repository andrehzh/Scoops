import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChnrBnZ1AJKcwmy7r_Q43PGeFLg-VdY8M",
  authDomain: "orbital-12dff.firebaseapp.com",
  projectId: "orbital-12dff",
  storageBucket: "orbital-12dff.appspot.com",
  messagingSenderId: "344489565872",
  appId: "1:344489565872:web:035b1ea17bee800537e575",
  measurementId: "G-Y5FNVZHRSZ"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import BuyerSellerScreen from './components/auth/BuyerSeller';
import LogInScreen from './components/auth/LogIn';
import BuyerRegisterScreen from './components/auth/BuyerRegister';
import SellerRegisterScreen from './components/auth/SellerRegister';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded) {
      return(
        <View style ={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Landing"> 
            <Stack.Screen name = "Landing" component = {LandingScreen} options = {{ headerShown: false }}/>
            <Stack.Screen name = "BuyerSeller" component = {BuyerSellerScreen}/>
            <Stack.Screen name = "LogIn" component = {LogInScreen}/>
            <Stack.Screen name = "BuyerRegister" component = {BuyerRegisterScreen}/>
            <Stack.Screen name = "SellerRegister" component = {SellerRegisterScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style ={{flex: 1, justifyContent: 'center'}}>
        <Text>User is logged in</Text>
      </View>
    )
  }
}

export default App

