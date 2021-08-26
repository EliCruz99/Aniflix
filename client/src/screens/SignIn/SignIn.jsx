import React from 'react'
import { useState } from 'react'
export default function SignIn({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState(handleLogin().error)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
      return (
        <form className="" onSubmit={(e) => {
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
              onError='your password is dumb'
            />
          </label>
          <button className="">Login</button>
        </form>
  )
}
