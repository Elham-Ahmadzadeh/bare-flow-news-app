import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import { NewsContext } from '../../context/NewsContext'
import ThemeContext from '../../context/ThemeContext'

export default function NewsDetail({ route, navigation }) {
  const { newsData } = useContext(NewsContext)
  const MainTheme = useContext(ThemeContext)
  const { url } = route.params
  const selectedPost = newsData.find((post) => post.url === url)

  return (
    <SafeAreaView  style={[styles.container, { backgroundColor: MainTheme.backgroundColor }]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text  style={[styles.title, { color: MainTheme.color }]}>{selectedPost.title}</Text>
        <Image
          style={styles.imageNews}
          source={{ uri: selectedPost.urlToImage }}
        ></Image>
        <Text style={styles.author}>{selectedPost.author}</Text>
        <Text style={[styles.newsDescription, { color: MainTheme.color }]}>{selectedPost.description}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  listNews: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 10,
    fontFamily: 'openSansBold',
  },
  author: {
    paddingBottom: 10,
  },
  imageNews: {
    height: 310,
    width: '98%',
  },
  newsDescription: {
    fontFamily: 'openSans',
    fontStyle: 'italic',
  },
})
