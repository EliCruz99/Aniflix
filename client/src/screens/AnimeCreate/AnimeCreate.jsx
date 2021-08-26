import React from 'react'
import { useState } from 'react'

export default function AnimeCreate({handleCreate, allCategories}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    watch_url: '',
    category: ''
  })
  const { name, description, img_url, watch_url, category } = formData
  


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  console.log(allCategories)
  return (
    <div>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
        e.preventDefault()
        handleCreate(formData)
      }}>
        <label className="">
          <h3 className="">Name</h3>
          <input
            type="text"
            className="border"
            name='name'
            value={name}
            onChange={handleChange}
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
          <h3 className="">Watch URL</h3>
          <input
            type="text"
            className="border"
            name='watch_url'
            value={watch_url}
            onChange={handleChange}
          />
        </label>
        <label className="">
          <select name="category" value={category} className="border">
            <option value="">Genre</option>
            {allCategories?.map((cat) => {
              return (
                <option>{cat.name}</option>
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
        <button className="border">Create Anime!</button>
      </form>
    </div>
  )
}
