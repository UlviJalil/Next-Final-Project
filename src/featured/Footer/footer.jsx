import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";







const Footer = () => {
  return (

    <footer className=" py-10 w-full flex-wrap">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Navigations</h3>
            <div className="grid grid-cols-3 gap-4">
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sell online</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shopping cart</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Store builder</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile commerce</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Dropshipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Website development</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Point of sale</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Hardware</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Software</a></li>
              </ul>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Promo</h3>
            <div className=" rounded">
              <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp" alt="Promo" className="mb-4 mx-auto" />
              <a href="#" className="text-[#7971ea] hover:underline">Finding Your Perfect Shoes</a>
              <p className="text-gray-600">Promo from January 15 — 25, 2019</p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaLocationDot className='w-5 h-5 text-[#7971ea] mr-4' />
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className='w-5 h-5 text-[#7971ea] mr-4' />
                +2 392 3929 210
              </li>
              <li className="flex items-center">
                <FaEnvelopeOpenText className='w-5 h-5 text-[#7971ea] mr-4' />
                emailaddress@domain.com
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex w-full flex-col mt-8">
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <div className="flex w-full ">
            <input type="email" placeholder="Email" className="w-52 p-2  rounded-l" />
            <button className="bg-[#7971ea] text-white p-2 rounded-r">SEND</button>
          </div>
        </div>
      </div>

      <div className='flex justify-end gap-5 mr-10'>
        <a href="#"><FaInstagram className='text-3xl text-[#e1306c]' /></a>
        <a href="#"><FaTwitter className='text-3xl text-[#1DA1F2]' /></a>
        <a href="#"><FaFacebook className='text-3xl text-[#1877F2]' /> </a>
      </div>



      <div class="mt-24 px-4 text-center">
        <p class="text-gray-600">
          Copyright ©2024 All rights reserved | This template is made with
          <span class="text-gray-600">♥</span> by
          <a href="#" class="text-purple-600 hover:underline">Colorlib</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
