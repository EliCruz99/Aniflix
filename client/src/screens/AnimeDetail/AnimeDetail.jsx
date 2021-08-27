import { useParams } from 'react-router'
import { getAnime } from '../../services/anime'
import { useState, useEffect } from 'react'

export default function AnimeDetail() {
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
  
  console.log(currentAnime)

  return (
    <div>
      <p className="">{currentAnime?.name}</p>
      <p className="">{currentAnime?.category.name}</p>
      <img src={currentAnime?.img_url} alt="" className="" />
      <a href={currentAnime?.watch_link} className=""><button className="border">WatchNow!</button></a>
      <p className="">{currentAnime?.description}</p>

    </div>
  )
}
