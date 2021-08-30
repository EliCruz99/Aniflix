import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/AnimeCard/Card'
import { useState } from 'react'

export default function AnimeCategory({allCategories, allAnimes}) {
  const [category, setCategory] = useState('All')
  
  const handleChange = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }
  
  const categories = allCategories.map((cat) => <option value={cat.name}>{cat.name}</option> )
  const filtered = allAnimes.filter((anime) => anime.category.name === category)
  const shows = filtered.map((anime) => (<Link key={anime.id} to={`/anime/${anime.id}`} className='m-10'>{<Card anime={anime}/>}</Link>))

  const categoryToAnime = () => {
    if (category === 'All') {
      return allAnimes.map((anime) => <Link key={anime.id} to={`/anime/${anime.id}`} className='m-10'>{<Card anime={anime}/>}</Link> )
    }
    return (filtered && shows)
  }

  return (
    <>
      <select value={category} onChange={handleChange}>
        <option>All</option>
        {categories}
      </select>
      <div className='flex flex-wrap'>
        {categoryToAnime()}
      </div>
      </>
  )
}
