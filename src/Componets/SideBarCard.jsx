import React from 'react'

const SideBarCard = ({card}) => {
  return (
    <div>
        <div className='bg-[#f6fafb] w-32 h-20 mb-1 flex flex-col items-center justify-center border-b-2 border-gray-300 shadow-sm hover:bg-green-800 ,invert'>
            <img className='h-7' src={card.img} alt={card.head} />
            <h1 className='text-black font-semibold'>{card.head}</h1>
        </div>
      
    </div>
  )
}

export default SideBarCard
