import React from 'react'
import { useState } from 'react'
export default function SignIn({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
      return (
        <form className="container flex flex-col justify-center content-center container mx-auto" onSubmit={(e) => {
          e.preventDefault()
          handleLogin(formData)
        }}>
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
            />
          </label>
          <button className="">Login</button>
        </form>
  )
}
