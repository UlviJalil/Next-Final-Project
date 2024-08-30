import React from 'react'
import { useState } from 'react';
import { FaDesktop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { IoShirt } from "react-icons/io5";
import { GiTrousers } from "react-icons/gi";
import { GiGlassCelebration } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";









const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showShopperDiv, setShowShopperDiv] = useState(false); // State to control the visibility of the new div


  const handleClose = () => {
    setIsVisible(false);
  };

  const handleShopperClick = () => {
    setShowShopperDiv((prev) => !prev); // Toggle the visibility of the new div
  };



  if (!isVisible) return null; // If header is not visible, render nothing

  return (
    <>

      <header className='flex items-center flex-wrap justify-between w-full h-16 bg-[#333333]'>
        <div className='flex items-center justify-center gap-5 px-5'>
          <img
            className='w-32 cursor-pointer'
            src='https://preview.colorlib.com/assets/img/logo.png'
            alt='Logo'
          />
          <div
            className='flex items-center justify-center cursor-pointer font-medium text-lg w-40 h-16 outline-none bg-[#222222] text-[#797979]'
            onClick={handleShopperClick}
          >
            + SHOPPERS
          </div>
        </div>


        <div className='flex gap-3 items-center flex-wrap cursor-pointer'>
          <div className='w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444] hover:bg-[#222222]'>
            <FaDesktop className='text-2xl text-[#848484] hover:text-[#fff]' />
          </div>
          <div className='w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444]'>
            <FaTabletAlt className='text-2xl text-[#848484] hover:text-[#fff]' />
          </div>
          <div className='w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444]'>
            <MdOutlineSmartphone className='text-2xl text-[#848484] hover:text-[#fff]' />
          </div>
          <div className='w-16  h-16 flex items-center justify-center border-y-0 bg-[#7ac64d]  '>
            <MdLocalGroceryStore className='text-2xl text-[#fff]' />
          </div>
          <div
            className='w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444] cursor-pointer'
            onClick={handleClose}
          >
            <IoClose className='text-2xl text-[#848484] hover:text-[#fff]' />
          </div>
        </div>
      </header>

      {showShopperDiv && (
        <div className=' bellow-div w-full h-48 bg-slate-900 flex items-center justify-center'>
          <p className=' flex items-center  text-4xl   text-[#fff] font-medium'>Enjoy your shopping <GiGlassCelebration className='text-5xl' />
          </p>
          <br /> <br />
          <div className='flex gap-4 items-center px-4'>
            <GiRunningShoe className='text-5xl text-green-600' /> <IoShirt className='text-5xl text-[#000]' /> <GiTrousers className='text-5xl text-gray-700' />
          </div>


        </div>
      )}

      <navbar className='flex w-full flex-wrap  items-center justify-around h-40'>
        <div className='flex items-center gap-5'>
          <IoIosSearch />
          <input className='outline-none' type="text" placeholder='Search' />
        </div>
        <button className="w-40 h-12 border border-black text-xl hover:text-[#fff] hover:bg-[#222222]">S H O P P E R S</button>

        <div className='flex gap-4 text-xl text-[#444444]'>
          <MdAccountCircle className='cursor-pointer hover:text-[#000]' />
          <FaRegHeart className='cursor-pointer hover:text-[#000]' />
          <MdLocalGroceryStore className='cursor-pointer hover:text-[#000]' />
          <div className='w-6 h-6 bg-[#7971ea] rounded-full relative right-5 bottom-4 cursor-pointer'>
            <span className='text-sm text-[#fff] flex items-center justify-center'>2</span>
          </div>
        </div>
      </navbar>

      <div className='flex justify-center items-center w-full gap-8'>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SHOP</a>
        <a href="#">CATALOGUE</a>
        <a href="#">NEW ARRIVALS</a>
        <a href="#">CONTACT</a> 
      </div>
    </>
  );
};

export default Header;
