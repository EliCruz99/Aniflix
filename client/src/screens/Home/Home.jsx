import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/AnimeCard/Card'

export default function Home({ allAnimes }) {
  
  console.log(allAnimes)
  return (
    <div>
      {allAnimes.map((anime) => {
        return (
          <Link to={`/anime/${anime.id}`}><Card anime={anime}/></Link>
        )
      })}
    </div>
  )
}
