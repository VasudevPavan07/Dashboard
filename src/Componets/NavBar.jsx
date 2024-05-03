import { useState } from 'react'
import DownArrow from '../assets/DownArrow.png'
import UpArrow from '../assets/UpArrow.png'
import plus from '../assets/plus.png'
import bell from '../assets/bell.png'
import search from '../assets/Search.png'
import Profilepic from '../assets/monkey d luffy.jpg'

const NavBar = () => {
  const [isOpen, SetisOpen] = useState(false);

  return (
    <div className='bg-[#1f2934] flex justify-between items-center'>
      <div className='flex items-center ml-[500px]'>
        <div className='w-28 relative  flex dropdown p-6 items-center  '>
          <button className='w-28  bg-[#e6e8e6] rounded-l-3xl justify-center pr-10 pl-10 h-10  flex gap-2 items-center' onClick={() => SetisOpen((prev) => !prev)} >Patients  {!isOpen ? (<img className='h-5' src={DownArrow} />) : (<img className='h-5' src={UpArrow} />)} </button>
          {isOpen && <div className='bg-[#e6e8e6] absolute top-16 flex flex-col items-start p-1 w-full z-20'> <li>1</li>
            <li>2</li>
            <li>3</li> </div>}
          <div className='flex items-center'>
            <input className='h-10 w-80 rounded-r-3xl' type="text" />
            <img className='absolute z-20 h-7 -right-[330px]  ' src={search} alt="" />
          </div>
        </div>
        <div className='absolute right-[450px] '>
          <button className='bg-green-700 p-3 text-sm gap-2 rounded-3xl text-white flex items-center'><img src={plus} className='h-3 invert' alt="" /> Add New</button>
        </div>
      </div>
      <div className='flex gap-6 mr-7'>
        <div className='rounded-full bg-slate-400 w-10 h-10 flex items-center justify-center'>
          <img className='h-5 invert' src={bell} alt="" />
        </div>
        <div className='w-10 h-10 rounded-full border-2 border-black'> <img className='rounded-full' src={Profilepic} alt="" /></div>
      </div></div>
  )
}

export default NavBar
