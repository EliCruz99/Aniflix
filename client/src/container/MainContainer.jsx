import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { getAllAnime, getAnime, postAnime, putAnime, deleteAnime } from '../services/anime'
import { getAllCategories, getCategory } from '../services/category'
import AllAnime from '../screens/AllAnime/AllAnime'
import AnimeCategory from '../screens/AnimeCategory/AnimeCategory'
import AnimeCreate from '../screens/AnimeCreate/AnimeCreate'
import AnimeDetail from '../screens/AnimeDetail/AnimeDetail'
import Favorites from '../screens/Favorites/Favorites'
import Home from '../screens/Home/Home'
import AnimeEdit from '../screens/AnimeEdit/AnimeEdit'
import { ForegroundColor } from 'jest-matcher-utils/node_modules/chalk'
import { formatDiagnostic } from 'typescript'

export default function MainContainer() {
  const [anime, setAnime] = useState([])
  const [category, setCategory] = useState([])
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
      setCategory(categoryList)
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
          <AnimeCategory/>
        </Route>
        <Route path='/anime/:id/edit'>
          <AnimeEdit/>
        </Route>
        <Route path='/anime/new'>
          <AnimeCreate/>
        </Route>
        <Route path='/anime/:id'>
          <AnimeDetail/>
        </Route>
        <Route path='/anime'>
          <AllAnime/>
        </Route>
        <Route path='/favorites/:id'>
          <Favorites/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}
