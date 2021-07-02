import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

import { NewsContext } from '../context/NewsContext'

export default function NewsDetail({ route, navigation }) {
  const { newsData } = useContext(NewsContext)
  const { url } = route.params
  const selectedPost = newsData.find((post) => post.url === url)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.title}>{selectedPost.title}</Text>
        <Image
          style={styles.imageNews}
          source={{ uri: selectedPost.urlToImage }}
        ></Image>
        <Text style={styles.author}>{selectedPost.author}</Text>
        <Text style={styles.newsDescription}>{selectedPost.description}</Text>
      </ScrollView>
    </View>
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
