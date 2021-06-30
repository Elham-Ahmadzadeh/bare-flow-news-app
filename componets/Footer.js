import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../RootNavigation'

function Footer() {
  return (
   <View style={styles.footer}>
     <TouchableOpacity
     style={styles.button}
     onPress={()=>RootNavigation.navigate('Globomantics')}
     >
       <Text>Home</Text>
     </TouchableOpacity>

     <TouchableOpacity
     style={styles.button}
     >
       <Text>About</Text>
     </TouchableOpacity>

     <TouchableOpacity
     style={styles.button}
     >
       <Text>Quote</Text>
     </TouchableOpacity>

     <TouchableOpacity
     style={styles.button}
     >
       <Text>Catalog</Text>
     </TouchableOpacity>
   </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  button: {
    padding: 20
  }
})

export default Footer