//react native imports
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//firebase and redux imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './components/screens/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))


// firebase Config edited to Scoops firestore
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

//Check if app is present
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

//Screen Imports
import LandingScreen from './components/screens/log in and register/Landing';
import BuyerSellerScreen from './components/screens/log in and register/BuyerSeller';
import LogInScreen from './components/screens/log in and register/LogIn';
import BuyerRegisterScreen from './components/screens/log in and register/BuyerRegister';
import SellerRegisterScreen from './components/screens/log in and register/SellerRegister';
import BuyerMainScreen from './components/screens/buyerHomepage/BuyerMain';
import ShopDetailScreen from './components/screens/shopDetail/ShopDetail';

const Stack = createStackNavigator();

export default function App() {
  return <ShopDetailScreen />;
}

// export class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loaded: false,
//     }
//   }
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (!user) {
//         this.setState({
//           loggedIn: false,
//           loaded: true,
//         })
//       } else {
//         this.setState({
//           loggedIn: true,
//           loaded: true,
//         })
//       }
//     })
//   }
//   render() {
//     const { loggedIn, loaded } = this.state;
//     if (!loaded) {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center' }}>
//           <Text>Loading</Text>
//         </View>
//       )
//     }

//     //auth screens
//     if (!loggedIn) {
//       return (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Landing">
//             <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="BuyerSeller" component={BuyerSellerScreen} />
//             <Stack.Screen name="LogIn" component={LogInScreen} />
//             <Stack.Screen name="BuyerRegister" component={BuyerRegisterScreen} />
//             <Stack.Screen name="SellerRegister" component={SellerRegisterScreen} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       );
//     }

//     const screenOptions = {
//       headerShown: false,
//     }

//     //if user is logged in
//     return (
//       <Provider store={store}>
//         <NavigationContainer>
//           <Stack.Navigator 
//             initialRouteName="BuyerMain" 
//             screenOptions={screenOptions}>
//             <Stack.Screen name="BuyerMain" component={BuyerMainScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="ShopDetail" component={ShopDetailScreen} options = {{ headerShown: true }}/>
//           </Stack.Navigator>
//         </NavigationContainer>
//       </Provider>
//     )
//   }
// }

// export default App

