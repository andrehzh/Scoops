import { TabActions } from '@react-navigation/native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { connect } from 'react-redux';
// import { fetchUser } from ../redux/actions/;
// import { bindActionCreators } from 'redux';

import FeedScreen from './Buyer/Feed';
import SearchScreen from './Buyer/Search';
import CheckoutScreen from './Buyer/Checkout';

const Tab = createBottomTabNavigator();

export class BuyerMain extends Component {
    /* componentDidMount() {
        this.props.fetchUser();
    } */

  render() {
    return (
      <Tab.Navigator>
          <Tab.Screen name = "Feed" Component = {FeedScreen}
          options = {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name = "home" color = { color } size = { 26 }/>
            )
          }}/>
          <Tab.Screen name = "Search" Component = {SearchScreen}
          options = {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name = "search" color = { color } size = { 26 }/>
            )
          }}/>
          <Tab.Screen name = "Checkout" Component = {CheckoutScreen}
          options = {{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name = "cart" color = { color } size = { 26 }/>
            )
          }}/>
      </Tab.Navigator>
    )
  }
}

export default BuyerHomePage