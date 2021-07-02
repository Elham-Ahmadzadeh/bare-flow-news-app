import React, { useContext } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native'
import Styles from './Styles'

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
          Styles.listNews,
          { borderBottomColor: MainTheme.borderBottomColor },
        ]}
      >
        <Text style={[Styles.title, { color: MainTheme.color }]}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetail', { url: item.url })}
        >
          <Image style={Styles.imageNews} source={{ uri: item.urlToImage }} />
        </TouchableOpacity>
        <Text style={[Styles.newsDescription, { color: MainTheme.color }]}>
          {item.description}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView
      style={[Styles.container, { backgroundColor: MainTheme.backgroundColor }]}
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


