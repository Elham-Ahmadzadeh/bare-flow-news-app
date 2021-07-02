import React from 'react'
import {
  StyleSheet,
  Text,
  View,
 ScrollView,

} from 'react-native'
export default function Chat({navigation}) {
return (
  <View style={styles.container}>
<Text>Chat App</Text></View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})


