import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated
} from 'react-native'

import { NewsContext } from '../../context/NewsContext'
import ThemeContext from '../../context/ThemeContext'

export default function Home({ navigation }) {
  const { newsData } = useContext(NewsContext)
  const MainTheme = useContext(ThemeContext)

  const storyItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
      >
        <View
          key={item.url}
          style={[
            styles.listNews,
            { borderBottomColor: MainTheme.borderBottomColor },
          ]}
        >
          <Text style={[styles.title, { color: MainTheme.color }]}>
            {item.title}
          </Text>
          <Image style={styles.imageNews} source={{ uri: item.urlToImage }} />
          <Text style={[styles.newsDescription, { color: MainTheme.color }]}>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView
      style={(styles.container, { backgroundColor: MainTheme.backgroundColor })}
    >
      <Animated.FlatList
        data={newsData}
        renderItem={storyItem}
        keyExtractor={(item) => item.url}
        windowSize={10}
        initialListSize={8}
        initialNumToRender={4}
        maxToRenderPerBatch={9}
        removeClippedSubviews={true}
        legacyImplementation={true}
      />
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
  },
  listNews: {
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  title: {
    paddingBottom: 20,
    fontSize: 20,
    fontFamily: 'openSansBold',
    paddingBottom: 12,
  },
  imageNews: {
    height: 210,
    width: '98%',
  },
  newsDescription: {
    fontFamily: 'openSans',
    fontStyle: 'italic',
    paddingTop: 26,
    paddingBottom: 5,
    marginTop: 14,
    fontSize: 15,
  },
})
