import React from 'react'
import { FaDesktop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoClose } from "react-icons/io5";






const Header = () => {
  return (
    <header className='flex items-center justify-between w-full h-16 bg-[#333333]'>
      <div className='flex items-center justify-center gap-5'>
        <img className='w-32 cursor-pointer' src="https://preview.colorlib.com/assets/img/logo.png" alt="sdad" />
        <div className="flex items-center justify-center cursor-pointer font-medium text-lg w-40 h-16  outline-none bg-[#222222] text-[#797979]">
          + SHOPPERS
        </div>
      </div>

      <div className="flex gap-3 items-center cursor-pointer">
        <div className='w-16 border  h-16 flex items-center justify-center border-y-0  border-[#444444]  hover:bg-[#222222]	'>
          <FaDesktop className='text-2xl	text-[#848484] hover:text-[#fff]' />
        </div>
        <div className='w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444]'>
          <FaTabletAlt className='text-2xl text-[#848484] hover:text-[#fff]' />
        </div>
        <div className='w-16 border  h-16 flex items-center justify-center border-y-0  border-[#444444]	'>
          <MdOutlineSmartphone className='text-2xl text-[#848484] hover:text-[#fff]' />
        </div>
        <div className='w-16 border  h-16 flex items-center justify-center border-y-0 bg-[#7ac64d] border-[#444444] hover:bg-[#222222]	' >
          <MdLocalGroceryStore className='text-2xl text-[#fff]' />
        </div>
        <div className='w-16 border  h-16 flex items-center justify-center border-y-0  border-[#444444]	'>
          <IoClose className='text-2xl text-[#848484] hover:text-[#fff]' />
        </div>

      </div>
    </header>
  )
}

export default Header


