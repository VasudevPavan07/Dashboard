import React from 'react'
import NavBar from './Componets/NavBar'
import SideBar from './Componets/SideBar'
import MainPage from './Componets/MainPage'

const App = () => {
  return (
    <div className='bg-[#f0f4f5]'>
      <NavBar />
      <SideBar />
      <MainPage />
    </div>
  )
}

export default App
