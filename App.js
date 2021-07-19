import 'react-native-gesture-handler'
import React, { Fragment, useState, useEffect } from 'react'
import { Platform, StatusBar } from 'react-native'
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
import SplashScreen from 'react-native-splash-screen'

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
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  const [fontsLoaded] = useFonts({
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })
  state = {
    isReady: false
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
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <ThemeContext.Provider
          value={
            isEnabled === true ? MainTheme.darkTheme : MainTheme.lightTheme
          }
        >
          <NewsContextProvider>
            <NavigationContainer ref={navigationRef}>
              <AppNavigator />
              <Footer />
            </NavigationContainer>
          </NewsContextProvider>
        </ThemeContext.Provider>
      </Fragment>
    )
  }
}

export default App
