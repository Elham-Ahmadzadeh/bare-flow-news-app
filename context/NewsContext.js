import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const NewsContext = createContext()
export const NewsContextProvider = (props) => {
  const [newsDataInfo, setNewsDataInfo] = useState('')
  useEffect(() => {
    async function getNews() {
      try {
        setNewsDataInfo(
          (
            await axios.get(
              'https://newsapi.org/v2/top-headlines?country=us&apiKey=f4c922d7164f44cea59b01e03f1515bd'
            )
          ).data
        )
      } catch (error) {
        console.log(error)
      }
    }
    getNews()
  }, [])
  const newsData = newsDataInfo.articles
  return (
    <NewsContext.Provider value={{ newsData }}>
      {props.children}
    </NewsContext.Provider>
  )
}
