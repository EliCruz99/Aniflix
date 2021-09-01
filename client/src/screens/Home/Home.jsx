import React from 'react'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-carousel-minimal'

export default function Home({ shuffle, allCategories, allAnimes }) {
  

  const category = allAnimes.filter((anime) => anime.category.name === 'Fantasy')
  const images = shuffle.slice(16, 25).map((anime) => {
    return { image: anime.img_url, caption: anime.name }
  })

  return (
    <>
      <div className="flex justify-center">
        <Carousel
          data={images}
          time={2000}
            width="850px"
            height="500px"
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          time={4000}
        />
      </div>
      <div className="flex flex-col container mx-auto mb-3">
        <p className="text-left border-b-4">Trending</p>
      </div>
        <div className='flex overflow-auto container mx-auto flex-nowrap justify-between'>
          {shuffle.slice(0,15).map((anime) => {
            return (
              <div className="">
                <Link key={anime.id} to={`/anime/${anime.id}`} className=''><img src={anime.img_url} alt={anime.name} className="w-32  h-32 shadow-xl" /></Link>
              </div>
            )
          })}
        </div>
      <div className="flex flex-col container mx-auto mb-12 overflow-auto">
        <p className="text-left border-b-4">Fantasy</p>
      <div className="flex justify-center container mx-auto pb-4">
        {category.map((anime) => (
           <Link key={anime.id} to={`/anime/${anime.id}`} className='w-32 m-3  h-32'><img src={anime.img_url} alt={anime.name} className="w-32  h-32" /></Link>
        ))}
      </div>
      </div>
  </>
  )
}
