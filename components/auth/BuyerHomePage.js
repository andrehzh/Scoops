import { TabActions } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export class BuyerHomePage extends Component {
    /* componentDidMount() {
        this.props.fetchUser();
    } */

  render() {
    return (
      <Tab.Navigator>
          <Tab.Screen name = "Feed" Component = {FeedScreen}/>
          <Tab.Screen name = "Settings" Component = {SettingsScreen}/>
      </Tab.Navigator>
    )
  }
}

export default BuyerHomePage