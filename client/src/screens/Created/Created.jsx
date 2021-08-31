import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/AnimeCard/Card'

export default function Created({ currentUser, allAnimes }) {

  const userAnime = allAnimes.filter((anime) => anime?.user_id === currentUser?.id)

  return (
    <div className=''>
      <p className="">{currentUser?.username}</p>
      <div className="flex flex-wrap justify-center">
      {userAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.id}`} className='m-3'>
            <Card anime={anime}/></Link>
        )
      })}
      </div>
    </div>
  )
}
