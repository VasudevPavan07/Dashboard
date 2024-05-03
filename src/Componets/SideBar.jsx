import React from 'react'
import bills from '../assets/bills.png'
import consultation from '../assets/consultation.png'
import hr from '../assets/hr.png'
import lab from '../assets/lab.png'
import patient from '../assets/person.png'
import pharma from '../assets/pharma.png'
import registration from '../assets/registration.png'
import tests from '../assets/tests.png'
import SideBarCard from './SideBarCard'

const SideBar = () => {
    const processes =[{img:registration ,head:'Registration'},{img:consultation ,head:'Consaltation'},{img:tests ,head:'Tests & Reports'},{img: bills,head:'Billing'}]
    const dashboard =[{img:patient ,head:'Patient'},{img:hr ,head:'Hr'},{img:lab ,head:'Lab'},{img:pharma ,head:'Pharma'}]
  return (

    <div className='bg-[#ffffff] p-1'>


<h1 className='font-bold p-2  text-sm text-gray-500' >Dashboard</h1>
{dashboard.map((card,index)=>(<SideBarCard key={index}
       card={card} className={`{index === 3 ? "rounded-3xl" : "" }`} />))}

<h1 className='font-bold p-2 text-sm text-gray-500 mt-3'>Processes</h1>

       {processes.map((card,index)=>(<SideBarCard key={index}
       card={card} />))}
    

      
    </div>
  )
}

export default SideBar
