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
      console.log(singleAnime)
      setCurrentAnime(singleAnime)
    }
    anime()
  }, [id])

  const userCreatedAnime = () => {
    if (currentUser?.id === currentAnime?.user_id) {
      return <Link to={`/anime/${currentAnime?.id}/edit`} className='flex justify-end'><button>Edit</button></Link>
    }
  }

  return (
    <div className='flex flex-col justify-center content-center'>
      <div className=" bg-gray-400 flex">
      <img src={currentAnime?.img_url} alt={currentAnime?.name} className="flex max-w-lg" />
      <div className="bg-red-500">
      {userCreatedAnime()}
      <p className="flex justify-end">{currentAnime?.name}</p>
      <p className="flex justify-end">{currentAnime?.category.name}</p>
      <a href={currentAnime?.watch_link} target="_blank" className="flex justify-end"><button className="border">WatchNow!</button></a>
      </div>
      </div>
      <p className="">{currentAnime?.description}</p>
      <div className="bg-purple-600 flex justify-center">p</div>
    </div>
  )
}
