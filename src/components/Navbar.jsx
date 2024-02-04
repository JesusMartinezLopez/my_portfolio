import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiUser3Fill } from "react-icons/ri";
import { RiBook3Fill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import { english, spanish } from '../context/LanguageText';
import spainicon from '../images/spainicon2.png';
import ukicon from '../images/ukicon.png';
import {Tooltip} from "@nextui-org/react";

import {useStateContext} from '../context/ContextProvider';

const Navbar = () => {

  const {activeMenu, setActiveMenu} = useStateContext();

  const [activeLanguage, setActiveLanguage] = useState(false);

  const { language, setLanguage } = useStateContext();

  const [lang, changeLanguage] = useState(false);
  

  return (
    <div className='flex flex-col'>
      <div className="flex items-center justify-between">
        <Link to='/'>
          <h1 className="font-poppins text-white capitalize text-[30px] sm:text-[42px] sm:ml-4 font-semibold ml-6"><p className="ml-4">{language.title}</p></h1>
        </Link>
        
        <button className='sm:hidden flex cursor-pointer'>
          <RxHamburgerMenu 
            className='text-white text-[30px] mr-8'
            onClick={() => setActiveMenu(prev => !prev)}
          />
        </button>
        <div className="flex-row sm:flex hidden">
          <Tooltip
            key="Profile"
            placement="top"
            content={language.navbar.icon1}
          >
            <NavLink to='/Profile' key='Profile'>
              <div className='flex items-center w-10 h-10 bg-transparent rounded-xl text-white hover:text-slate-900 hover:bg-white duration-500 mr-[4px]'><RiUser3Fill className="text-[23px] cursor-pointer ml-2" /></div>
            </NavLink>
          </Tooltip>

          <Tooltip
            key="Studies"
            placement="top"
            content={language.navbar.icon2}
          >
            <NavLink to='/Studies' key='Studies'>
              <div className='flex items-center w-10 h-10 bg-transparent rounded-xl text-white hover:text-slate-900 hover:bg-white duration-500 mr-[4px]'><RiBook3Fill className="text-[23px] cursor-pointer ml-2" /></div>
            </NavLink>
          </Tooltip>

          <Tooltip
            key="Language"
            placement="top"
            content={language.navbar.icon3}
          >
            <div 
              className='flex items-center w-10 h-10 bg-transparent rounded-xl text-white hover:text-slate-900 hover:bg-white duration-500 mr-[4px]'
              onClick={() => changeLanguage((prev) => !prev)}
            >
              <AiOutlineGlobal className="text-[23px] cursor-pointer ml-2" />
            </div>
          </Tooltip>

          <Tooltip
            key="Info"
            placement="top"
            content={language.navbar.icon4}
          >
            <NavLink to='/Info' key='Info'>
              <div className='flex items-center w-10 h-10 bg-transparent rounded-xl text-white hover:text-slate-900 hover:bg-white duration-500 mr-12'><BsInfoCircle className="text-[23px] cursor-pointer ml-2" /></div>
            </NavLink>
          </Tooltip>
          
        </div>
      </div>
      <div className={`${lang ? 'sm:flex sm:flex-col' : 'hidden '} w-[10%] min-w-[10%] h-[105px] left-[87%] top-[11%] border-[1px] border-white bg-dimWhite sm:fixed hidden`}>
        <div 
          className='h-[55px] w-full flex flex-row items-center cursor-pointer hover:bg-dimWhite'
          onClick={() => setLanguage(language => spanish, changeLanguage((prev) => !prev))}
        >
          <img src={spainicon} alt="Spain Icon" className='h-[22px] ml-[12px]' />
          <label className='font-semibold text-[20px] text-black ml-[25px] cursor-pointer'>Español</label>
        </div>
        <div 
          className='h-[55px] w-full flex flex-row items-center cursor-pointer hover:bg-dimWhite'
          onClick={() => setLanguage(language => english, changeLanguage((prev) => !prev))}
        >
          <img src={ukicon} alt="Uk Icon" className='h-[22px] ml-[12px]' />
          <label className='font-semibold text-[20px] text-black ml-[25px] cursor-pointer'>English</label>
        </div>
      </div>

      <div className={`${activeMenu ? 'flex' : 'hidden'} sm:hidden w-full min-h-[370px] relative mt-4 bg-white`}>
          <ul className='list-none flex flex-col w-full'>
            <NavLink to='/Profile' key='Profile'>
            <li>
              <div className='flex flex-row items-center w-full h-[80px] hover:bg-slate-100 mt-6'>
                <RiUser3Fill className="text-[28px] cursor-pointer ml-6 text-black" /> <p className='font-poppins text-[24px] ml-4'>{language.navbar.icon1}</p>
              </div>
            </li>
            </NavLink>
            <NavLink to='/Studies' key='Studies'>
            <li>
              <div className='flex flex-row items-center w-full h-[80px] hover:bg-slate-100'>
                <RiBook3Fill className="text-[28px] cursor-pointer ml-6 text-black" /> <p className='font-poppins text-[24px] ml-4'>{language.navbar.icon2}</p>
              </div>
            </li>
            </NavLink>
            <li>
              <div 
                className='flex flex-row items-center w-full h-[80px] hover:bg-slate-100'
                onClick={() => setActiveLanguage((prev) => !prev)}
              >
                <AiOutlineGlobal className="text-[28px] cursor-pointer ml-6 text-black" /> <p className='font-poppins text-[24px] ml-4'>{language.navbar.icon3}</p>
              </div>
            </li>
            <li>
              <div 
                className={`${activeLanguage ? 'flex flex-row' : 'hidden'} h-[70px] w-full bg-slate-200 items-center`}
                onClick={() => setLanguage(language => spanish)}
              >
                <img src={spainicon} alt="Spain Icon" className='h-[22px] ml-[30px]' />
                <label className='font-poppins text-[22px] ml-6'>Español</label>
              </div>
            </li>
            <li>
              <div 
                className={`${activeLanguage ? 'flex flex-row' : 'hidden'} h-[70px] w-full bg-slate-200 items-center`}
                onClick={() => setLanguage(language => english)}
              >
                <img src={ukicon} alt="Uk Icon" className='h-[22px] ml-[30px]' />
                <label className='font-poppins text-[22px] ml-6'>English</label>
              </div>
            </li>
            <NavLink to='/Info' key='Info'>
            <li>
              <div className='flex flex-row items-center w-full h-[80px] hover:bg-slate-100'>
                <BsInfoCircle className="text-[28px] cursor-pointer ml-6 text-black" /> <p className='font-poppins text-[24px] ml-4'>{language.navbar.icon4}</p>
              </div>
            </li>
            </NavLink>
            
          </ul>
        </div>

    </div>
    
    
  )
}

export default Navbar