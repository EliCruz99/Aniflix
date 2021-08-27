import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function Nav(props) {
  const {currentUser, handleLogout} = props

  return (
  <div>
      <nav className='flex flex-row justify-evenly flex-nowrap'>
        <Link className='mr-1' to='/home'>Aniflix</Link>
      {currentUser ? (
        <div className='flex'>
          <Link to={`/profile/${currentUser.username}`} className="mr-5"><p className="mr-1">{currentUser.username}</p></Link>
          <button className="border ml-6" onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <div className="mr-1">
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
        )}
        {currentUser && (
          <div>
            <Link to='/anime/new' className="ml-1">Make new Anime</Link>
          </div>
        )}
          </nav>
    </div>
  )
}
