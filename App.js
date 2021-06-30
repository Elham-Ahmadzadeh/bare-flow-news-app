import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'


import Home from './Home'
import Header from './componets/Header'

const Stack = createStackNavigator()

function App() {
  const [fontsLoaded] = useFonts({
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
  })
  state = {
    isReady: false,
  }
  if (!fontsLoaded && !state.isReady) {
    return (
      <AppLoading
        onFinish={() => state({ isReady: true })}
        onError={console.warn}
      />
    )
  } else {
    return (
      <NavigationContainer

      >

        <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
          <Stack.Screen
            name="Globomantics"
            component={Home}
            options={{
              header: () => <Header headerDisplay="Globomantics" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
