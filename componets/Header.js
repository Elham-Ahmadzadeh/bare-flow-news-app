import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, Switch } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import ThemeContext from '../context/ThemeContext'

export default function Header(props) {
  const [isEnabled, setIsEnabled] = useState(false)
  const MainTheme = useContext(ThemeContext)

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.headerDisplay}</Text>

      <StatusBar style="auto" />
      <Switch
        trackColor={{ false: '#ffff', true: '#268b86' }}
        thumbColor={isEnabled ? '#0f0604' : '#fff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(isEnabled) => {
          setIsEnabled(isEnabled)
          EventRegister.emit('changeTheme', isEnabled)
        }}
        value={isEnabled}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#ceecd0',
  },
  text: {
    fontFamily: 'openSans',
    fontSize: 27,
  },
})
