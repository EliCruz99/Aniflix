import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Created({ currentUser, allAnimes }) {

  const userAnime = allAnimes.filter((anime) => anime?.user_id === currentUser?.id)

  return (
    <div>
      <p className="">{currentUser?.username}</p>
      {userAnime.map((anime) => {
        return (
          <Link to={`/anime/${anime.id}`}><div className="">
            <p className="">{anime.name}</p>
            <img src={anime.img_url} alt="" className="" />
          </div></Link>
        )
      })}
    </div>
  )
}
