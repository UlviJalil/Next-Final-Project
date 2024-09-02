import React from 'react'
import { BiSolidTruck } from "react-icons/bi";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";




const Main = () => {
  
  return (
    <>
      <main className="flex w-full bg-[#a8f2eb] h-[500px] mt-8 flex-wrap">

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img className=" max-w-7xl h-auto pl-80" src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="Shoes" />
        </div>


        <div className="w-full md:w-1/2 flex flex-col justify-center items-start flex-wrap">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finding Your <br /> Perfect Shoes</h1>
          <p className="text-gray-700 mb-6">A good quality shoe should have the following characteristics: Comfort: <br /> A good shoe should provide comfort br to your feet, especially <br /> if you are going to wear them for extended periods. It should fit well with <br /> width at the forefoot and provide adequate support to your arches, heels, and toes.</p>
          <button className="bg-[#7971ea] text-white py-2 px-6 rounded hover:bg-purple-600">SHOP NOW</button>
        </div>
        {/* End of Shoe */}


      </main>



      <div className='flex w-full flex-wrap justify-center gap-10  h-52 mt-14'>
        <div> <BiSolidTruck className='text-5xl text-[#7971ea]' /></div>
        <div className=' flex flex-col gap-2'>
          <h2 className='text-[18px]'>FREE SHIPING</h2>
          <p className='text-[#8c95a9]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
        </div>
        <div> <FaArrowRotateRight className='text-4xl text-[#7971ea]' /></div>
        <div className=' flex flex-col gap-3'>
          <h2 className='text-[18px]'>FREE RETURNS</h2>
          <p className='text-[#8c95a9]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
        </div>
        <div> <FaQuestionCircle className='text-4xl text-[#7971ea]' /></div>
        <div className=' flex flex-col gap-3'>
          <h2 className='text-[18px]'>CUSTOMER SUPPORT</h2>
          <p className='text-[#8c95a9]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Phasellus at iaculis quam. <br /> Integer accumsan tincidunt fringilla.</p>
        </div>

      </div>

    </>
  );
}

export default Main