// import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, Provider as ReduxProvider } from 'react-redux';
import Login from './components/auth/LogIn';
import Landing from './components/auth/Landing';
import BuyerSeller from './components/auth/BuyerSeller';
import BuyerRegister from './components/auth/BuyerRegister';
import SellerRegister from './components/auth/SellerRegister';
import ShopDetail from './screens/ShopDetail';
import BuyerHome from './screens/BuyerHome';
import OrderCompleted from './screens/OrderCompleted';
import SellerHome from './screens/SellerHome';
import SellerAdd from './screens/SellerAdd';
import SellerEdit from './screens/SellerEdit';
import AddPhoto from './components/sellerComponents/AddPhoto';
import AddItem from './components/sellerComponents/AddItem';

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import rootReducer from './redux/reducers';

const Store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false,
};

//sign out stack
export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing' screenOptions={screenOptions}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="BuyerSeller" component={BuyerSeller} />
            <Stack.Screen name="BuyerRegister" component={BuyerRegister} />
            <Stack.Screen name="SellerRegister" component={SellerRegister} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
)

//sign in stack Seller
export const SignedInStackSeller = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SellerHome" screenOptions={screenOptions}>
            <Stack.Screen name="SellerHome" component={SellerHome} />
            <Stack.Screen name="SellerAdd" component={SellerAdd} />
            <Stack.Screen name="SellerEdit" component={SellerEdit} />
            <Stack.Screen name="AddPhoto" component={AddPhoto} />
            <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
    </NavigationContainer>
)

//sign in stack seller
export const SignedinStackBuyer = () => (
    <Provider store={Store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='BuyerHome' screenOptions={screenOptions}>
            <Stack.Screen name="BuyerHome" component={BuyerHome} />
            <Stack.Screen name="ShopDetail" component={ShopDetail} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
)
