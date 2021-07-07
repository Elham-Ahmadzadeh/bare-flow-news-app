import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../componets/Header'
import Home from '../pages/home/Home'
import NewsDetail from '../pages/home/NewsDetail'
import ChatTopTab from '../pages/chat/ChatTopTab'
import LoginScreen from '../pages/screens/LoginScreen'
import { HeaderBackButton } from '@react-navigation/stack'

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
        component={ChatTopTab}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.navigate('Globomantics')}
              label="Back"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: '#ceecd0',
          },
        }}
      />
    </Stack.Navigator>
  )
}
