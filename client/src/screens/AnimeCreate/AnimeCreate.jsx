import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function AnimeCreate({handleCreate, allCategories}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img_url: '',
    watch_link: '',
    category_id: ''
  })
  const { name, description, img_url, watch_link, category_id } = formData
  const history = useHistory()
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = () => {
    handleCreate(formData)
    history.push('/home')
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
            handleCreate(formData)
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
        handleCreate(formData)
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
        handleCreate(formData)
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
      </form>
    </div>
  )
}
