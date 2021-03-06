import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../componets/Header'
import Home from '../pages/home/Home'
import NewsDetail from '../pages/home/NewsDetail'
import ChatTopTab from '../pages/chat/Tab/ChatTopTab'
import LoginScreen from '../pages/screens/LoginScreen'
import SignupScreen from '../pages/screens/SignupScreen'
import WelcomeScreen from '../pages/screens/WelcomeScreen'
import { HeaderBackButton } from '@react-navigation/stack'


export default function AppNavigator() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
      <Stack.Screen
        name="Globomantics"
        component={Home}
        options={{
          header: () => <Header headerDisplay="Globomantics" />
        }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          header: () => <Header headerDisplay="News" />
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
          headerStyle: {
            backgroundColor: '#ceecd0'
          }
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: '#ceecd0'
          }
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: '#ceecd0'
          }
        }}
      />
        <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: '#ceecd0'
          }
        }}
      />
    </Stack.Navigator>
  )
}
