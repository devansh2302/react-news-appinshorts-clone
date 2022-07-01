import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import Navbar from './Components/Navbar'
import NewsContent from './Components/NewsContent/NewsContent';
import apikey from './Data/config'
import Footer from './Components/Footer/Footer'

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );

      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults)

    } catch (error) {
      console.log(error)

    }
  }
  console.log(newsArray)

  useEffect(() => {
    newsApi();
  }, [newsResults, category, ]);

  return (
    <div className='App'>
      <Navbar setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore} />
      <Footer />
    </div>

  )

}

export default App;