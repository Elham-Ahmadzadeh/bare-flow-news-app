import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import { View, Text } from 'react-native'

export default function chat() {
  const MainTheme = useContext(ThemeContext)
  return (
    <View style={{ backgroundColor: MainTheme.backgroundColor }}>
      <Text style={{ color: MainTheme.color }}>Notifications!</Text>
    </View>
  )
}
