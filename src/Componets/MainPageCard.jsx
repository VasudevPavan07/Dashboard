import React from 'react'

const MainPageCard = ({MainPageCard,bgcolor,leftBorder}) => {
  return (
    <div style={{ borderLeft: leftBorder}} className='flex justify-between items-center bg-white h-24 w-80 p-5'>
        <div>
        <h1 className='text-green-800 font-bold'>{MainPageCard.head}</h1>
        <h1 className='font-bold text-xl'>{MainPageCard.Period}</h1>
        <h1 className='text-sm '>Today/Period</h1>
        </div>
        <div style={{backgroundColor:bgcolor ,}} className='h-10 w-10 mb-4 flex justify-center items-center rounded-full '><img  className='h-5' src={MainPageCard.img} alt={MainPageCard.head} /></div>
      
    </div>
  )
}

export default MainPageCard
