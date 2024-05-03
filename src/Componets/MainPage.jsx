import React from 'react'
import ConsultantCount from '../assets/Consultant Count.png'
import DietPlan from '../assets/Dietplan.png'
import Labs from '../assets/Labs.png'
import Consultations from '../assets/Consultations.png'
import MainPageCard from './MainPageCard'
import redo from '../assets/redo.png'
import DownArrow from '../assets/arrow-down.png'
import ConsultantsTable from './ConsultantsTable'
import people from '../assets/people.png'


const MainPage = () => {
  const coloumns = [
    { title: 'Name', accessor: 'name' },
    { title: 'Patient Count', accessor: 'count' },
    { title: 'Lab', accessor: 'lab' },
    { title: 'Diet Plan', accessor: 'Dietplan' }
  ];
  const data = [
    { name: 'John Smith', count: 12, lab: 3, Dietplan: 6 },
    { name: 'Jane Doe', count: 6, lab: 1, Dietplan: 2 },
    { name: 'Mark Johnson', count: 8, lab: 2, Dietplan: 4 },
    { name: 'Marry Lee', count: 10, lab: 4, Dietplan: 8 },
    { name: 'David Chen', count: 14, lab: 5, Dietplan: 8 },
    { name: 'Emily Wana', count: 5, lab: 2, Dietplan: 3 },
  ];
  const MainpageCard = [{ head: 'Consultant Count', Period: '90/900', img: ConsultantCount }, { head: 'Consultations', Period: '11/25', img: Consultations }, { head: 'Labs', Period: '25/560', img: Labs }, { head: 'Diet Plan', Period: '25/250', img: DietPlan }]

  return (
    <div className='bg-[#f0f4f5] absolute top-[90px] w-[92vw] left-32 p-5 '>
      <div className='bg-white p-4 rounded-xl flex justify-start items-center gap-3 '><div className='flex justify-start items-center gap-3 pb-2 border-b-2 border-[#166535]'><img className='h-5' src={people} alt="" /><h1 className='font-semibold text-green-700' >Consultants</h1></div></div>
      <div className='bg-white h-12 rounded-xl mt-3 flex justify-start items-center'>
        <button className='bg-[#166535] relative rounded-l-xl h-12 text-white p-3 filterbtn '>Filters</button>
        <select className='border-2 border-gray-500 p-2  rounded-3xl ml-10 w-40' name="" id=""><option value="">Select Range</option></select>

        <input className='ml-10' type="radio" /><label className='ml-3' htmlFor="Summary">Summary</label>
        <input className='ml-10' type="radio" /><label className='ml-3' htmlFor="Branch Wise">Branch Wise</label>

      </div>
      <div className='flex justify-between items-center mt-8'>
        <MainPageCard leftBorder={'5px solid #FDECD4'} bgcolor={'#FDECD4'} MainPageCard={MainpageCard[0]} />
        <MainPageCard leftBorder={'5px solid #E0E7FC'} bgcolor={'#E0E7FC'} MainPageCard={MainpageCard[1]} />
        <MainPageCard leftBorder={'5px solid #D8FEE6'} bgcolor={'#D8FEE6'} MainPageCard={MainpageCard[2]} />
        <MainPageCard leftBorder={'5px solid #F0E8FD'} bgcolor={'#F0E8FD'} MainPageCard={MainpageCard[3]} />

      </div>
      <div className='bg-white mt-10 p-2 '>
        <div className='flex gap-6 p-8 absolute right-8'>
          <button className=' flex justify-center items-center h-8 w-8 rounded-full border-2 border-gray-400'><img className='h-5' src={redo} alt="" /></button>
          <button className=' flex justify-center items-center h-8 w-8 rounded-full  border-2 border-gray-400'><img className='h-5' src={DownArrow} alt="" /></button>
        </div>

        <div className='mt-20 ml-10'>
          <ConsultantsTable coloumns={coloumns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
