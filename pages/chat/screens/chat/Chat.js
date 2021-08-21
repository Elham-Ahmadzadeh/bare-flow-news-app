import React, { useContext, useState } from 'react'
import ThemeContext from '../../../../context/ThemeContext'
import { View, ActivityIndicator } from 'react-native'

import PersonalInfo from './PersonalInfo'
export default function chat() {
  const [fileImage, setFileImage] = useState({})
  const [isLoading, setIsloading] = useState(true)
  const MainTheme = useContext(ThemeContext)
  return (
    <View style={{ backgroundColor: MainTheme.backgroundColor }}>
      {isLoading ? (
        <PersonalInfo onClosed={ fileImage}/>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  )
}
