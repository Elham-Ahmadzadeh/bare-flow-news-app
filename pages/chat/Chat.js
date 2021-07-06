import React, { useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ThemeContext from '../../context/ThemeContext'
import TopTabChatNavigator from '../../navigator/TopTabChatNavigator'

export default function ChatList() {
  const MainTheme = useContext(ThemeContext)
  return <TopTabChatNavigator />
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})
