import React from 'react'
import { IoMdSettings } from "react-icons/io";

function Header() {
  return (
    <div className='w-screen h-16 bg-[#1976D2] flex '>
     <img  className="size-8 ml-6 mt-4 start-10 text-white" src="https://static.thenounproject.com/png/7037253-84.png"></img>
        <div className='text-white font-mono font-bold text-nowrap text-xl pl-2 pt-4 '>Cinema Finder</div><p className='text-2xl absolute mb-5 -right-0 mr-9 top-5 text-[#0B3660]'> <IoMdSettings /></p>
    </div>
  )
}

export default Header
