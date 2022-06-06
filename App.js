import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

// firebase Config edited to Scoops firestore
const firebaseConfig = {
  apiKey: "AIzaSyCw7L24L9DnfUuyJ8Nccmeud6bSAiWGVaM",
  authDomain: "scoops-6b1da.firebaseapp.com",
  projectId: "scoops-6b1da",
  storageBucket: "scoops-6b1da.appspot.com",
  messagingSenderId: "240532445850",
  appId: "1:240532445850:web:411c82a044e58f6a0fdd23",
  measurementId: "G-1LGWMC8P61"
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
import BuyerMainScreen from './components/auth/BuyerMain';


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
            <Stack.Screen name = "BuyerMain" component = {BuyerMainScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
   } 

    /* return (
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "BuyerHomePage"> 
            <Stack.Screen name = "BuyerHomePage" component = {BuyerHomeScreen} options = {{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    ) */
  }
}
export default App

