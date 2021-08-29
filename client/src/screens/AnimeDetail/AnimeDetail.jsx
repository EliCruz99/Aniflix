import { useParams } from 'react-router'
import { getAnime } from '../../services/anime'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AnimeDetail({currentUser}) {
  const [currentAnime, setCurrentAnime] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const anime = async () => {
      const singleAnime = await getAnime(id)
      setCurrentAnime(singleAnime)
    }
    anime()
  }, [id])

  const userCreatedAnime = () => {
    if (currentUser?.id === currentAnime?.user_id) {
      return <button className='bg-palette-card text-palette-font text-2xl mb-10'><Link to={`/anime/${currentAnime?.id}/edit`} className=''>Edit</Link></button>
    }
  }

  return (
    <>
      <div className='flex pb-28 pt-20 '>
        <img src={currentAnime?.img_url} alt={currentAnime?.name} className=" shadow-lg w-72  h-96 mx-auto"/>
        <div className="flex flex-col px-64 justify-start mx-auto">
          {userCreatedAnime()}
          <p className="shadow bg-palette-lightCard text-palette-fontOnDark mb-10 text-2xl whitespace-nowrap text-left tracking-wide">{currentAnime?.name}</p>
          <p className="shadow bg-palette-lightCard text-palette-fontOnDark mb-10 text-2xl items-baseline tracking-wide">{currentAnime?.category.name}</p>
          <a href={currentAnime?.watch_link} target="_blank" className="shadow text-2xl text-white bg-palette-darkCard whitespace-nowrap "><button className="w-40">Watch Now!</button></a>
        </div>
      </div>
      <div className="flex flex-col justify-start bg-palette-lightCard">
        <p className="mx-28 text-palette-fontOnLight  text-4xl text-left"><span className='pl-32'>Description</span></p>
        <p className="flex px-28 text-left text-palette-fontOnLight text-xl justify-start"><span className='pl-32 mb-4'>{currentAnime?.description}</span></p>
      </div>
    </>
  )
}
