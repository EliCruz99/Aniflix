import React from 'react'
import { useState } from 'react'

export default function Singup({handleRegister}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
      return (
        <form className="flex flex-col" onSubmit={(e) => {
          e.preventDefault()
          handleRegister(formData)
        }}>
          <label className=''>
            <h3 className="">Email:</h3>
            <input
              className=""
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className=''>
            <h3 className="">Username:</h3>
            <input
              className=""
              type="text"
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label className="">
            <h3 className="">Password</h3>
            <input
              className=""
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              onError="You password must be longer than 5 characters"
            />
          </label>
          <button className="">Register</button>
        </form>
  )
}
