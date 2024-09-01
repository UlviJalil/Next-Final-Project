import React from 'react'

const Main = () => {
  return (
    <main className="flex w-full bg-[#a8f2eb] h-[500px] mt-8 flex-wrap">

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img className=" max-w-7xl h-auto pl-80" src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="Shoes" />
      </div>


      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Finding Your <br /> Perfect Shoes</h1>
        <p className="text-gray-700 mb-6">A good quality shoe should have the following characteristics: Comfort: <br /> A good shoe should provide comfort br to your feet, especially <br /> if you are going to wear them for extended periods. It should fit well with <br /> width at the forefoot and provide adequate support to your arches, heels, and toes.</p>
        <button className="bg-[#7971ea] text-white py-2 px-6 rounded hover:bg-purple-600">SHOP NOW</button>
      </div>
    </main>
  );
}

export default Main