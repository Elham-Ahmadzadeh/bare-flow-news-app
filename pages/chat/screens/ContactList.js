import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import { Text, View } from 'react-native'
export default function contactList() {
  const MainTheme = useContext(ThemeContext)

  return (
    <View style={{ backgroundColor: MainTheme.backgroundColor }}>
      <Text style={{ color: MainTheme.color }}>contact</Text>
    </View>
  )
}
