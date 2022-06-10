import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [ activeTab, setActiveTab ] = useState("Delivery")

  return (
    <View style = {{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton 
        Text = "Delivery" 
        btnColor = "teal" 
        textColor = "white" 
        activeTab = {activeTab} 
        setActiveTab = {setActiveTab}/>
      <HeaderButton 
        Text = "Pickup" 
        btnColor = "white" 
        textColor = "teal" 
        activeTab = {activeTab} 
        setActiveTab = {setActiveTab}/>
    </View>
  )
}

const HeaderButton = (props) => (
  <TouchableOpacity style = {{
    backgroundColor: props.activeTab == props.Text ? "teal" : "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 15,
    marginLeft: 5
  }}
  onPress = {() => props.setActiveTab(props.Text)}
  >
    <Text style = {{color: props.activeTab == props.Text ? "white" : "teal", fontSize: 15, fontWeight: "600"}}>{props.Text}</Text>
  </TouchableOpacity>
)