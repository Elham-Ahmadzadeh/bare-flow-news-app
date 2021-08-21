import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Avatar, Text, Button } from 'react-native-elements'

export default function WelcomeScreen() {
  return (
    <View style={Style.contain}>
      <Text h2>Welcome</Text>
      <Avatar
        size="large"
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{
          backgroundColor: '#24aab0'
        }}
      />
      <Text>John Done</Text>
      <Button buttonStyle={{ backgroundColor: 'blue' }} title="Log out" />
    </View>
  )
}
const Style = StyleSheet.create({
  contain: {
    flex: 0.8,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})
