import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/AnimeCard/Card'

export default function Created({ currentUser, allAnimes }) {

  const userAnime = allAnimes.filter((anime) => anime?.user_id === currentUser?.id)

  return (
    <div className=''>
      <button className="transform motion-safe:hover:scale-110 perfers-reduced-motion" > Hover me </button>
      <p className="">{currentUser?.username}</p>
      <div className="flex flex-wrap justify-center">
      {userAnime.map((anime) => {
        return (
          <Link key={anime.id} to={`/anime/${anime.id}`} className='m-3'>
            <Card anime={anime}/></Link>
        )
      })}
      </div>
      
    </div>
  )
}
