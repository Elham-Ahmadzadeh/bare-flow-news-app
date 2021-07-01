import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Footer from './componets/Footer'
import { navigationRef } from './RootNavigation'
import { NewsContextProvider } from './context/NewsContext'
import Home from './pages/Home'
import Header from './componets/Header'
import NewsDetail from './pages/NewsDetail'

const Stack = createStackNavigator()

function App() {
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
      <NewsContextProvider>
        <NavigationContainer ref={navigationRef}>
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
          </Stack.Navigator>
          <Footer />
        </NavigationContainer>
      </NewsContextProvider>
    )
  }
}

export default App
