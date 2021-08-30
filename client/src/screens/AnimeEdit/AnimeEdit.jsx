import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router'

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
  const history = useHistory()
  
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

  const handleSubmit = () => {
    handleUpdate(id, formData)
    history.push(`anime/${id}`)
  }

  return (
    <div className='container mx-auto'>
        <div className="flex mb-28 mt-20">
      <label className="flex flex-col mx-auto">
        <img src={img_url} alt={name} className='shadow-lg w-72 h-96' />
        <h3 className="">Image URL</h3>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault()
            handleUpdate(id, formData)
          }}>
          <input
            type="text"
            className="border"
            name='img_url'
            value={img_url}
            onChange={handleChange}
          />
        </form>
        </label>
      <form
        className="flex flex-col px-64 justify-start mx-auto"
        onSubmit={(e) => {
        e.preventDefault()
        handleUpdate(id,formData)
      }}>
        <label className="">
          <input
            type="text"
            className="shadow bg-palette-lightCard text-palette-fontOnDark mb-10 text-2xl whitespace-nowrap text-left tracking-wide"
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="">
          <select name="category_id" value={category_id} className="shadow bg-palette-lightCard text-palette-fontOnDark mb-10 text-2xl items-baseline tracking-wide w-" onChange={handleChange} required>
            <option value="category">Genre</option>
            {allCategories?.map((cat) => {
              return (
                <option key={cat.id} name='category' value={Number(cat.id)}>{cat.name}</option>
              )
            })}
          </select>
          </label>
        <label className="">
          <h3 className="">Watch Link</h3>
          <input
            type="text"
            className="shadow bg-palette-lightCard text-palette-fontOnDark mb-10 text-2xl items-baseline tracking-wide"
            name='watch_link'
            value={watch_link}
            onChange={handleChange}
          />
        </label>
          </form>
      </div>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
        e.preventDefault()
        handleUpdate(id,formData)
      }}>
        <label className="flex justify-start bg-palette-lightCard">
          <h3 className="mx-28 text-palette-fontOnLight  text-4xl text-left">Description</h3>
        </label>
          <textarea
            type="text"
            className="flex px-28 text-left bg-palette-lightCard text-xl justify-start resize-none"
            name='description'
            value={description}
            onChange={handleChange}
          />
        <button type='submit' className=""
          onClick={handleSubmit}>Save</button>
        <button className="" onClick={() => handleDelete(id)}>Delete</button>
      </form>
    </div>
  )
}
