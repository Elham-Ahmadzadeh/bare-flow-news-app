import 'react-native-gesture-handler'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import Header from '../componets/Header'
import Home from '../pages/home/Home'
import NewsDetail from '../pages/home/NewsDetail'
import Chat from '../pages/chat/Chat'

export default function AppNavigator() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
      <Stack.Screen
        name="Globomantics"
        component={Home}
        options={{
          header: () => <Header headerDisplay="Globomantics" />,
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: () => <Header headerDisplay="News" />,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerStyle: {
            backgroundColor: '#ceecd0',
          },
        }}
      />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})
