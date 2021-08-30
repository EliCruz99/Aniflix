import React, { useState, useEffect } from 'react'
import { getAllAnime } from '../../services/anime'

export default function Search() {
  const [query, setQuery] = useState({ show: '' })
  const [searchResults, setSearchResults] = useState([])
  const [allAnimes, setAllAnimes] = useState([])
  


  useEffect(() => {
    const fetchAnime = async() => {
      const animeList = await getAllAnime()
      setAllAnimes(animeList)
    }
    fetchAnime()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e?.target
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }


  const handleSearch = (e) => {
    e.preventDefault()
    const results = allAnimes?.filter((anime) => {
      anime.name.toLowerCase().includes(e?.target.value.toLowerCase())
    })
    setQuery(results)
    setSearchResults(results)
    console.log(results)
  }


  const handleSubmit = (e) => {
  e.preventDefault()
}



  return (
    <>
      <form className='' onSubmit={handleSubmit}>
        <input type="text" name={query.show} value={query.show} placeholder='Search Anime...' onChange={handleSearch} className="w-full h-full text-12 text-blue-400 rounded" />
      </form>
      {searchResults.map((anime) => { <p key={anime.id}>{anime.name}</p>})}
    </>
  )
}
