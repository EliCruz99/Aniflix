import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export default function Carousel({shuffle}) {
  const [currentImg, setCurrentImg] = useState(0)
  const length = shuffle.slice(16,25).length


  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const prevSlide = () => {
    setCurrentImg( currentImg === 0? length - 1: currentImg - 1)
  }


  if (!Array.isArray(shuffle) || shuffle.length <= 0) {
    return null
  }

  return (
    <section className='relative flex justify-center content-center'>
      <FaArrowAltCircleLeft onClick={prevSlide} className='absolute top-2/4 inset-y-0 -left-8 text-5xl z-10 cursor-pointer select-none'/>
      <FaArrowAltCircleRight onClick={nextSlide} className='absolute top-2/4 inset-y-0 -right-8 text-5xl z-10 cursor-pointer select-none'/>
      {shuffle?.slice(16, 25).map((anime, index) => {
        return (
          <div key={index} className={index === currentImg ? 'opacity-1 duration-100 transform scale-90': 'opacity-0 duration-100'}>
            {index === currentImg && (<img  src={anime.img_url} alt={anime.name} className='rounded' />)}
            
          </div>
        )
        
  })}
    </section>
  )
}
