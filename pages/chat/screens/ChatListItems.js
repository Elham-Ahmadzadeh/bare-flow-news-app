import React, { useContext } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import { Text, View } from 'react-native'

const ChatListItems = () => {
  const MainTheme = useContext(ThemeContext)

  return (
    <View style={{ backgroundColor: MainTheme.backgroundColor }}>
      <Text style={{ color: MainTheme.color }}>chatlisstItem</Text>
    </View>
  )
}

export default ChatListItems
