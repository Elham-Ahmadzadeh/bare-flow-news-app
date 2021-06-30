import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const NewsContext = createContext()
export const NewsContextProvider = (props) => {
  const [dataLoading, finishLoading] = useState(true)
  const [newsDataInfo, setNewsDataInfo] = useState('')

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

  return (
    <NewsContext.Provider value={{ newsDataInfo }}>
      {props.children}
    </NewsContext.Provider>
  )
}
