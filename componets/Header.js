import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'


export default function Header(props) {
  return (
    <View style={styles.header}>

      <View>
        <Text style={styles.text}>{props.headerDisplay}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
   width: '100%',
   height: 95,
   alignItems: 'center',
   justifyContent: 'center'

  },
  text: {
    paddingTop: 40,
    fontFamily:  'openSans',
    fontSize: 27
  }
})
