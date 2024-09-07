import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
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
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next'; // i18n hook

const Header = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook for i18n
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [showShopperDiv, setShowShopperDiv] = useState(false);
  const [showHomeDiv, setShowHomeDiv] = useState(false);
  const [showAboutDiv, setShowAboutDiv] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCloseTitle = () => setIsTitleVisible(false);
  const handleShopperClick = () => setShowShopperDiv((prev) => !prev);
  const handleHomeClick = () => setShowHomeDiv((prev) => !prev);
  const handleAboutClick = () => setShowAboutDiv((prev) => !prev);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {isTitleVisible && (
        <header className="flex z-20 items-center flex-wrap justify-between w-full h-16 fixed bg-[#333333]">
          <div className="flex items-center justify-center gap-5 px-5">
            <img
              className="w-32 cursor-pointer"
              src="https://preview.colorlib.com/assets/img/logo.png"
              alt="Logo"
            />
            <div
              className="flex items-center justify-center cursor-pointer font-medium text-lg w-40 h-16 outline-none bg-[#222222] text-[#797979]"
              onClick={handleShopperClick}
            >
              + {t('shoppers')}
            </div>
          </div>

          <div className="flex gap-3 items-center flex-wrap cursor-pointer">
            <div className="w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444] hover:bg-[#222222]">
              <FaDesktop className="text-2xl text-[#848484] hover:text-[#fff]" />
            </div>
            <div className="w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444]">
              <FaTabletAlt className="text-2xl text-[#848484] hover:text-[#fff]" />
            </div>
            <div className="w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444]">
              <MdOutlineSmartphone className="text-2xl text-[#848484] hover:text-[#fff]" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center border-y-0 bg-[#7ac64d]">
              <MdLocalGroceryStore className="text-2xl text-[#fff]" />
            </div>
            <div
              className="w-16 border h-16 flex items-center justify-center border-y-0 border-[#444444] cursor-pointer"
              onClick={handleCloseTitle}
            >
              <IoClose className="text-2xl text-[#848484] hover:text-[#fff]" />
            </div>
          </div>
        </header>
      )}

      {showShopperDiv && (
        <div className=" w-full h-48 bg-black flex items-center justify-center">
          <p className="flex items-center justify-center text-4xl text-[#fff] font-medium">
            {t('enjoy_shopping')} <GiGlassCelebration className="text-5xl" />
          </p>
          <div className="flex gap-4 items-center px-4">
            <GiRunningShoe className="text-5xl text-green-600" />
            <IoShirt className="text-5xl text-red-700" />
            <GiTrousers className="text-5xl text-gray-700" />
          </div>
        </div>
      )}

      <navbar className="flex w-full flex-wrap items-center justify-around h-48 pt-14">
        <div className="flex items-center gap-5 ">
          <IoIosSearch />
          <input className="outline-none" type="text" placeholder={t('search_placeholder')} />
        </div>
        <button className="w-40 h-12 border border-black text-xl hover:text-[#fff] hover:bg-[#222222]">
          {t('shoppers')}
        </button>

        <div className="flex items-center gap-4 text-xl text-[#444444]">
          <MdAccountCircle className="cursor-pointer hover:text-[#000]" />
          <FaRegHeart className="cursor-pointer hover:text-[#000]" />
          <MdLocalGroceryStore className="cursor-pointer hover:text-[#000]" />
          <div className="w-6 h-6 bg-[#7971ea] rounded-full relative right-5 bottom-4 cursor-pointer">
            <span className="text-sm text-[#fff] flex items-center justify-center">2</span>
          </div>
          <button className="flex" onClick={toggleDarkMode}>
            <IoMoonOutline className="text-2xl cursor-pointer hover:text-[#000]" />
          </button>
          {/* Language Switcher */}
          <button onClick={() => changeLanguage('az')}>
            <img className='w-[22px] h-[22px]' src="https://w7.pngwing.com/pngs/478/548/png-transparent-flag-of-azerbaijan-azerbaijanis-flag-of-azerbaijan-flag-sphere-republic-thumbnail.png" alt="aze" />
          </button>
          <button onClick={() => changeLanguage('en')}>
            <img className='w-[22px] h-[22px]' src="https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/Britain-512.png" alt="eng" />
          </button>
          <button onClick={() => changeLanguage('ru')}>
            <img className='w-[25px] h-[25px]' src="https://media.istockphoto.com/id/542202100/photo/russian-flag-button-flag-of-russia-badge-3d-illustration.jpg?s=612x612&w=0&k=20&c=4F-3PGlyJWQl9yL_58-iJn6mRjez_XwdpHO9csQv8wM=" alt="eng" />
          </button>
        </div>
      </navbar>

      <div className="flex justify-center items-center w-full gap-8 text-sm">
        <a className="flex items-center gap-2 text-[#7971ea] cursor-pointer" href="#" onClick={handleHomeClick}>
          {t('home')} <IoIosArrowDown />
        </a>
        <a className="flex items-center gap-2 hover:text-[#7971ea]" href="#" onClick={handleAboutClick}>
          {t('about')} <IoIosArrowDown />
        </a>
        <a className="hover:text-[#7971ea]" href="#">
          {t('shop')}
        </a>
        <a className="hover:text-[#7971ea]" href="#">
          {t('catalogue')}
        </a>
        <a className="hover:text-[#7971ea]" href="#">
          {t('new_arrivals')}
        </a>
        <a className="hover:text-[#7971ea]" href="#">
          {t('contact')}
        </a>
      </div>

      {showHomeDiv && (
        <div className="w-48 h-44 bg-black my-3 mx-[405px]">
          <ul className="overflow-hidden flex flex-col gap-5 px-3 py-3 text-white">
            <li className="cursor-pointer">Menu One</li>
            <li className="cursor-pointer">Menu Two</li>
            <li className="cursor-pointer">Menu Three</li>
            <li className="cursor-pointer">Sub Menu</li>
          </ul>
        </div>
      )}
      {showAboutDiv && (
        <div className="w-48 h-36 bg-black my-3 mx-[405px]">
          <ul className="overflow-hidden flex flex-col gap-5 px-3 py-3 text-white">
            <li className="cursor-pointer">Menu One</li>
            <li className="cursor-pointer">Menu Two</li>
            <li className="cursor-pointer">Menu Three</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
