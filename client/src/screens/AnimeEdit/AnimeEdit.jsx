import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'


export default function AnimeEdit({ allAnimes, handleDelete, handleUpdate, allCategories }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    watch_link: '',
    category_id: ''
  })
  const { name, description, img_url, watch_link, category_id } = formData
  const { id } = useParams()
  
  useEffect(() => {
    const prefillFormData = () => {
      const animeShow = allAnimes.find((anime) => anime.id === Number(id))
      setFormData({
      name: animeShow.name,
      description: animeShow.description,
      img_url: animeShow.img_url,
      watch_link: animeShow.watch_link,
      category_id: animeShow.category_id})
    }
    if (allAnimes.length) {
      prefillFormData()
    }
  },[allAnimes,id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
        e.preventDefault()
        handleUpdate(id,formData)
      }}>
        <label className="">
          <h3 className="">Name</h3>
          <input
            type="text"
            className="border"
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="">
          <h3 className="">Image URL</h3>
          <input
            type="text"
            className="border"
            name='img_url'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label className="">
          <h3 className="">Watch Link</h3>
          <input
            type="text"
            className="border"
            name='watch_link'
            value={watch_link}
            onChange={handleChange}
          />
        </label>
        <label className="">
          <select name="category_id" value={category_id} className="border" onChange={handleChange} required>
            <option value="category">Genre</option>
            {allCategories?.map((cat) => {
              return (
                <option id={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
          </select>
        </label>
        <label className="">
          <h3 className="">Description</h3>
          <textarea
            type="text"
            className="border"
            name='description'
            value={description}
            onChange={handleChange}
          />
        </label>
        <button className="border">Edit!</button>
        <button className="" onClick={() => handleDelete(id)}>Delete</button>
      </form>
    </div>
  )
}
