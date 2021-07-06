import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import { View, Text } from 'react-native'

const Tab = createMaterialTopTabNavigator()
export default function TopTabChatNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

