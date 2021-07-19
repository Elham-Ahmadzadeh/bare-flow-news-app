import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { NewsContext } from '../../context/NewsContext'
import ThemeContext from '../../context/ThemeContext'
import Styles from './Styles'

export default function NewsDetail({ route, navigation }) {
  const { newsData } = useContext(NewsContext)
  const MainTheme = useContext(ThemeContext)
  const { url } = route.params
  const selectedPost = newsData.find((post) => post.url === url)

  return (
    <View
      style={[Styles.container, { backgroundColor: MainTheme.backgroundColor }]}
    >
      <Text style={[Styles.title, { color: MainTheme.color }]}>
        {selectedPost.title}
      </Text>
      <Image
        style={Styles.imageNews}
        source={{ uri: selectedPost.urlToImage }}
      />
      <Text style={[Styles.newsDescription, { color: MainTheme.color }]}>
        {selectedPost.description}
      </Text>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={Styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}
