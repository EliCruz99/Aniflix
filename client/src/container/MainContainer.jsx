import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getAllAnime, postAnime, putAnime, deleteAnime } from '../services/anime'
import { getAllCategories } from '../services/category'
import AllAnime from '../screens/AllAnime/AllAnime'
import AnimeCategory from '../screens/AnimeCategory/AnimeCategory'
import AnimeCreate from '../screens/AnimeCreate/AnimeCreate'
import AnimeDetail from '../screens/AnimeDetail/AnimeDetail'
import Favorites from '../screens/Favorites/Favorites'
import Home from '../screens/Home/Home'
import AnimeEdit from '../screens/AnimeEdit/AnimeEdit'

export default function MainContainer() {
  const [anime, setAnime] = useState([])
  const [allCategory, setAllCategory] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchAnime = async() => {
      const animeList = await getAllAnime()
      setAnime(animeList)
    }
    fetchAnime()
  }, [])
  
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await getAllCategories()
      setAllCategory(categoryList)
    }
    fetchCategory()
  }, [])
  
  const handleCreate = async (formData) => {
    const animeData = await postAnime(formData)
    setAnime((prevState) => [...prevState, animeData])
    history.push('/home')
  }

  const handleUpdate = async (id, formData) => {
    const animeData = await putAnime(id, formData)
    setAnime((prevState) =>
      prevState.map((anime) => {
      return anime.id === Number(id) ? animeData: anime 
    })
    )
    history.push()
  }

  const handleDelete = async (id) => {
    await deleteAnime(id)
    setAnime((prevState) => prevState.filter((anime) => anime.id !== id))
  }



  return (
    <div>
      <Switch>
        <Route path='/category'>
          <AnimeCategory category={allCategory}/>
        </Route>
        <Route path='/anime/:id/edit'>
          <AnimeEdit anime={anime} handleUpdate={handleUpdate}/>
        </Route>
        <Route path='/anime/new'>
          <AnimeCreate category={allCategory} handleCreate={handleCreate}/>
        </Route>
        <Route path='/anime/:id'>
          <AnimeDetail anime={anime}/>
        </Route>
        <Route path='/anime'>
          <AllAnime anime={anime}/>
        </Route>
        <Route path='/favorites/:id'>
          <Favorites anime={anime}/>
        </Route>
        <Route path='/home'>
          <Home anime={anime}/>
        </Route>
      </Switch>
    </div>
  )
}
