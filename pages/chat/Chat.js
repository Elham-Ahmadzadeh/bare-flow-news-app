import React, {useContext} from 'react'
import {
  StyleSheet,
  Text,
  View,
 ScrollView,

} from 'react-native'
import ThemeContext from '../../context/ThemeContext'

export default function Chat() {
  const MainTheme = useContext(ThemeContext)

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


