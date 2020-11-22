import React from 'react'
import './App.css'
import Header from './components/ui/Header'
import RecipeGrid from './components/recipes/RecipeGrid'
import { useState, useEffect } from "react";
import Search from './components/ui/Search'

const  App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "tasty.p.rapidapi.com"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log(data)
      setItems(data.results)
      setIsLoading(false)

    })
    .catch(err => {
      console.error(err);
    });
  }, [query])

  return (
    <div className = "bg">
      <div className = "container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <RecipeGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  )
}

export default App;