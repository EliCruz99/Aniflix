import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function Nav(props) {
  const {currentUser, handleLogout} = props

  return (
  <div>
    <nav className='flex flex-row'>
      {currentUser ? (
        <div>
          <p className="mr-1">{currentUser.username}</p>
          <button className="" onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <div className="mr-1">
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
        )}
        <Link to='/home' className="mr-1">Home</Link>
        {currentUser && (
          <div>
            <Link to='/anime/new' className="ml-1">Make new Anime</Link>
            <Link to={`/profile/${currentUser.username}`} className="ml-1">Profile</Link>
          </div>
        )}
          </nav>
    </div>
  )
}
