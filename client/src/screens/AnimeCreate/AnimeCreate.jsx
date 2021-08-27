import React from 'react'
import { useState } from 'react'

export default function AnimeCreate({handleCreate, allCategories}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    watch_link: '',
    category_id: ''
  })
  const { name, description, img_url, watch_link, category_id } = formData
  

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
            {allCategories.map((cat) => {
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
        <button className="border">Create Anime!</button>
      </form>
    </div>
  )
}
