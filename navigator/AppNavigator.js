import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../componets/Header'
import Home from '../pages/home/Home'
import NewsDetail from '../pages/home/NewsDetail'
import Chat from '../pages/chat/Chat'

export default function AppNavigator () {

const Stack = createStackNavigator()

return (
  <Stack.Navigator
  initialRouteName="Globomantics"
  headerMode="screen"
>
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
      header: () => <Header headerDisplay="Chat" />,
    }}
  />
</Stack.Navigator>
)
}