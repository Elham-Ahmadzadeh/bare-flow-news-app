import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { EventRegister } from 'react-native-event-listeners'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigator/AppNavigator'
import { navigationRef } from './navigator/RootNavigation'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import ThemeContext from './context/ThemeContext'
import { NewsContextProvider } from './context/NewsContext'
import MainTheme from './style/MainTheme'
import Footer from './componets/Footer'

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
            <AppNavigator />
            <Footer />
          </NavigationContainer>
        </NewsContextProvider>
      </ThemeContext.Provider>
    )
  }
}

export default App
