import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({allAnimes}) {
  return (
    <div>
      {allAnimes.map((anime) => {
        return (
          <Link to={`/anime/${anime.id}`}><p className="">{anime.name}</p></Link>
        )
      })}
    </div>
  )
}
