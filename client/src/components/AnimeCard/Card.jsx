import React from 'react'

export default function Card({anime}) {
  return (
    <div className='flex w-72 h-32 border-2'>
      <img src={anime.img_url} alt={anime.name} className="border-r-2 w-32 h-32" />
      <div className="flex flex-col ">
        <span className=" border-b-2">{anime.name}</span>
        <p className="border-b-2">{anime.category?.name}</p>
        <p className="overflow-hidden text-left overflow-ellipsis">{anime.description}</p>
      </div>
    </div>
  )
}
