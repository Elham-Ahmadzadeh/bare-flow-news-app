import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native'

import { NewsContext } from '../../context/NewsContext'
import ThemeContext from '../../context/ThemeContext'

export default function Home({ navigation }) {
  const { newsData } = useContext(NewsContext)
  const MainTheme = useContext(ThemeContext)

  const scrollY = React.useRef(new Animated.Value(0)).current
  const storyItem = ({ item }) => {
    return (
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
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
        >
          <Image style={styles.imageNews} source={{ uri: item.urlToImage }} />
        </TouchableOpacity>
        <Text style={[styles.newsDescription, { color: MainTheme.color }]}>
          {item.description}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: MainTheme.backgroundColor }]}
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
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
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
    padding: 10,
    fontSize: 20,
    fontFamily: 'openSansBold',
    margin: 10,
  },
  imageNews: {
    height: 210,
    width: '98%',
    margin: 3,
  },
  newsDescription: {
    fontFamily: 'openSans',
    margin: 10,
    padding: 10,
    paddingBottom: 5,
    marginTop: 14,
    fontSize: 15,
  },
})
