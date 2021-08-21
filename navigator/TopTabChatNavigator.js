import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ContactList from '../pages/chat/screens/contact/ContactList'
import Chat from '../pages/chat/screens/chat/Chat'

const Tab = createMaterialTopTabNavigator()
export default function TopTabChatNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="contacts" component={ContactList} />
      <Tab.Screen name="chat" component={Chat} />
    </Tab.Navigator>
  )
}
