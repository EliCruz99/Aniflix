import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function Nav(props) {
  const {currentUser, handleLogout} = props

  return (
  <div className='z-10 bg-palette-darkCard shadow-lg'>
      <nav className='flex flex-row justify-evenly flex-nowrap'>
        <Link className='mr-1 text-palette-font text-2xl' to='/home'>Aniflix</Link>
        <Link to='/category' className='ml-1 text-palette-font'>Categories</Link>
      {currentUser ? (
        <div className='flex text-palette-font'>
          <Link to={`/profile/${currentUser.username}`} className="mr-5 "><p className="mr-1">{currentUser.username}</p></Link>
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
            <Link to='/anime/new' className="ml-1 text-palette-font" >Make new Anime</Link>
          </div>
        )}
        <Search/>
          </nav>
    </div>
  )
}
