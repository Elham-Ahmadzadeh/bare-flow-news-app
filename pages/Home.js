
import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import axios from 'axios'

export default function Home({ navigation }) {
  const [dataLoading, finishLoading] = useState(true)
  const [newsDataInfo, setNewsDataInfo] = useState([])

  async function getNews() {
    try {
      setNewsDataInfo(
        (
          await axios.get(
            'https://newsapi.org/v2/everything?q=tech&apiKey=f4c922d7164f44cea59b01e03f1515bd'
          )
        ).data
      )
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNews(), finishLoading(false)
  }, [])

   const storyItem = ({item}) => {
  return (
    <TouchableWithoutFeedback
    onPress={navigation.navigate('NewsDetail', {url: item.url})}
    >
<View style={styles.listNews}>
  <Text style={styles.title}>{item.title}</Text>
  <Text style={styles.author}>{item.author}</Text>
  <Image
  style={styles.imageNews}
  source={{uri: item.urlToImage}}
/>
<Text style={styles.newsDescription}>{item.description}</Text>
</View>
    </TouchableWithoutFeedback>
  )
}
  return (
    newsDataInfo && (
      <View style={styles.container}>
       {dataLoading ? <ActivityIndicator/> : (
         <FlatList
         data={newsDataInfo}
         renderItem={storyItem}
         keyExtractor={(item) => item.url}
         />
       )}
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20

  },
  listNews: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  title: {
    paddingBottom: 10,
    fontFamily: 'openSans',
    fontWeight: 'bold'
  },
  author: {
    paddingBottom: 10,
  },
  imageNews: {
    height: 100,
    width: '98%'
  },
  newsDescription: {
    fontFamily: 'openSans',
    fontStyle: 'italic'
  }
})
