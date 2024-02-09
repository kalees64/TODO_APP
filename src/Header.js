import React from 'react'
import './App.css'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 className='header-title'>{title}</h1>
    </header>
  )
}
Header.defaultProbs = {
  title : "Today List"
}
export default Header