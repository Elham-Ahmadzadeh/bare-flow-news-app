import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

import { NewsContext } from '../context/NewsContext'

export default function Home({ navigation }) {
  const { newsDataInfo } = useContext(NewsContext)
  //console.log(newsDataInfo.articles[0])
  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
      >
        <View style={styles.listNews}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.imageNews} source={{ uri: item.urlToImage }} />
          <Text style={styles.newsDescription}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={newsDataInfo.articles}
        renderItem={storyItem}
        keyExtractor={(item) => item.url}
      />
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
    paddingBottom: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    paddingBottom: 20,
    fontSize: 25,
    fontFamily: 'openSansBold',
    fontWeight: 'bold',
    paddingBottom: 10,
  },

  imageNews: {
    height: 310,
    width: '98%',
  },
  newsDescription: {
    fontFamily: 'openSans',
    fontStyle: 'italic',
    paddingTop: 26,
    paddingBottom: 5,
    marginTop: 14,
    fontSize: 15
  },
})
