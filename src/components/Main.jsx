import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLinkedin } from "react-icons/ai";

import { useStateContext } from '../context/ContextProvider';

const Main = () => {

  const { language, setLanguage } = useStateContext();

  return (
    <main className="flex flex-col w-full bg-transparent pt-6 sm:pt-[3%] overflow-auto">
      <section className='w-full flex flex-col justify-center items-center cursor-default'>
        <h1 className="font-poppins font-bold text-white text-[46px] sm:text-[90px] sm:mt-0 mt-[8%]">{language.main.mainTitle}</h1>
        <div className='flex flex-col justify-center items-center text-center'>
          <p className="font-poppins font-semibold text-white text-[34px] sm:text-[64px] sm:mt-0 mt-[4%]">{language.main.description}</p>
        </div>
        <p className='font-poppins text-white text-[22px] sm:text-[40px] text-center w-[70%] sm:w-full mt-[8%] sm:mt-[2%]'>{language.main.skills}</p>
        <p className='font-poppins text-white text-[16px] sm:text-[28px] text-center w-[80%] sm:w-full sm:mt-[0.5%] mt-[5%]'>{language.main.moreInfo}</p>
        <div className='flex items-center justify-between sm:w-[15%] w-[40%]  mt-10 sm:flex-row flex-col'>
          <NavLink to='/Info' key='Info'>
            <button 
              className='h-10 w-28 border-white border-[2px] bg-transparent text-white text-[18px] hover:bg-white hover:text-slate-900 hover:rounded-[4px] hover:font-semibold duration-300'
            >
              {language.main.button1}
            </button>
          </NavLink>
          <NavLink to='/Profile' key='Profile'>
            <button className='h-10 w-28 border-white border-[2px] bg-transparent text-white text-[18px] hover:bg-white hover:text-slate-900 hover:rounded-[4px] hover:font-semibold duration-300 sm:mt-0 mt-6'>{language.main.button2}</button>
          </NavLink>
        </div>
        <div className='flex w-full items-center justify-center mt-12 sm:mt-14'>
          <a href="https://www.linkedin.com/in/jesus-martinez-lopez-123373261/">
            <button 
              className='flex items-center justify-center w-[190px] h-[70px] rounded-md border-white border-[2px] bg:transparent hover:bg-dimWhite text-white text-[24px] duration-300'
            >
              <label className='ml-2'>{language.main.hireButton}</label> 
              <AiFillLinkedin className='ml-4 text-[28px]' />
            </button>
          </a>
        </div>
      </section>
    
  </main>
  )
}

export default Main