import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className='fixed bottom-0 mt-0 flex flex-row justify-center w-screen'>
      <h1 className="mr-4">created by Elijah Cruz</h1>
      <a href="https://github.com/EliCruz99" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} className="mr-2 text-xl" />
      </a>
      <a href="https://www.linkedin.com/in/elijah-cruz" target="_blank" rel="oopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="ml-2 text-xl" />
       </a>
    </footer>
  )
}
