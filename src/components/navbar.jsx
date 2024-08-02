import React from 'react'
import F from '../constant/constants'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around pt-4'>
      <h2 className='text-2xl font-bold' onClick={() => navigate("/")}>TaskerHub</h2>

      <div className='flex gap-9 font-semibold rounded '>
  {
    F.NAVLINKS.map(
      (item, index) => {
        return (
          <Link 
            key={index} 
            to={item.path} 
            className={item.name === 'Become a Tasker' ? 'border border-black rounded-lg p-2 mb-5' : ''}
          >
            {item.name}
          </Link>
        )
      }
    )
  }
</div>

    </div>
  )
}

export default Navbar