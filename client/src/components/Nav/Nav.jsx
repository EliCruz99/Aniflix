import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function Nav(props) {
  const {currentUser, handleLogout} = props

  return (
  <div>
    <nav>
      {currentUser ? (
        <div>
          <p className="">{currentUser.username}</p>
          <button className="" onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <div className="">
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
        )}
        <Link to='/anime' className="">Anime</Link>
        {currentUser && (
          <div>
            <Link to='/anime/new' className="">Make new Anime</Link>
          </div>
        )}
          </nav>
    </div>
  )
}
