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
      return <Link to={`/anime/${currentAnime?.id}/edit`}><button>Edit</button></Link>
    }
  }

  return (
    <div>
      {userCreatedAnime()}
      <p className="">{currentAnime?.name}</p>
      <p className="">{currentAnime?.category.name}</p>
      <img src={currentAnime?.img_url} alt="" className="" />
      <a href={currentAnime?.watch_link} target="_blank" className=""><button className="border">WatchNow!</button></a>
      <p className="">{currentAnime?.description}</p>

    </div>
  )
}
