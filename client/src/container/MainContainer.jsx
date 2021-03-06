import React from 'react'
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllAnime, postAnime, putAnime, deleteAnime, getShuffle } from '../services/anime'
import { getAllCategories } from '../services/category'
import AnimeCategory from '../screens/AnimeCategory/AnimeCategory'
import AnimeCreate from '../screens/AnimeCreate/AnimeCreate'
import AnimeDetail from '../screens/AnimeDetail/AnimeDetail'
import Created from '../screens/Created/Created'
import Home from '../screens/Home/Home'
import AnimeEdit from '../screens/AnimeEdit/AnimeEdit'

export default function MainContainer({currentUser}) {
  const [allAnimes, setAllAnimes] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [shuffle, setShuffle] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchAnime = async() => {
      const animeList = await getAllAnime()
      setAllAnimes(animeList)
    }
    fetchAnime()
  }, [])
  
  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await getAllCategories()
      setAllCategories(categoryList)
    }
    fetchCategory()
  }, [])

  useEffect(() => {
    const aquireShuffle = async () => {
      const shuffle = await getShuffle()
      setShuffle(shuffle)
    }
    aquireShuffle()
  }, [])
  
  const handleCreate = async (formData) => {
    const animeData = await postAnime(formData)
    setAllAnimes((prevState) => [...prevState, animeData])
    history.push('/home')
  }

  const handleUpdate = async (id, formData) => {
    const animeData = await putAnime(id, formData)
    setAllAnimes((prevState) =>
      prevState.map((anime) => {
      return anime.id === Number(id) ? animeData: anime 
    })
    )
  }

  const handleDelete = async (id) => {
    await deleteAnime(id)
    setAllAnimes((prevState) => prevState.filter((anime) => anime.id !== id))
  }

  
  return (
    <div>
      <Switch>
        <Route path='/category'>
          <AnimeCategory allCategories={allCategories} allAnimes={allAnimes}/>
        </Route>
        <Route path='/anime/:id/edit'>
          <AnimeEdit allAnimes={allAnimes} allCategories={allCategories}  handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Route>
        <Route path='/anime/new'>
          <AnimeCreate allCategories={allCategories} handleCreate={handleCreate}/>
        </Route>
        <Route path='/anime/:id'>
          <AnimeDetail allAnime={allAnimes} currentUser={currentUser}/>
        </Route>
        <Route path={`/profile/${currentUser?.username}`}>
          <Created currentUser={currentUser}  allAnimes={allAnimes}/>
        </Route>
        <Route path='/'>
          <Home shuffle={shuffle} allAnimes={allAnimes}/>
        </Route>
      </Switch>
    </div>
  )
}
