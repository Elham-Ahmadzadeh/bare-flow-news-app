import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NewsContextProvider } from './context/NewsContext'
import { EventRegister } from 'react-native-event-listeners'
import { navigationRef } from './RootNavigation'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import ThemeContext from './context/ThemeContext'
import MainTheme from './MainTheme'
import Home from './pages/Home'
import NewsDetail from './pages/NewsDetail'
import Chat from './pages/Chat'
import Footer from './componets/Footer'
import Header from './componets/Header'

const Stack = createStackNavigator()

function App() {
  const [isEnabled, setIsEnabled] = useState(false)
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeTheme',
      (hasTheme) => {
        setIsEnabled(hasTheme)
      }
    )
    return () => {
      EventRegister.removeEventListener(eventListener)
    }
  })

  const [fontsLoaded] = useFonts({
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
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
      <ThemeContext.Provider
        value={isEnabled === true ? MainTheme.darkTheme : MainTheme.lightTheme}
      >
        <NewsContextProvider>
          <NavigationContainer ref={navigationRef}>
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
            <Footer />
          </NavigationContainer>
        </NewsContextProvider>
      </ThemeContext.Provider>
    )
  }
}

export default App
