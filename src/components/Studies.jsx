import React from 'react';
import { useStateContext } from '../context/ContextProvider';

import html from '../images/html5.png';
import css from '../images/CSS3.png';
import js from '../images/JS_logo.png';
import react from '../images/React.png';
import tailwind from '../images/tailwind.png';
import java from '../images/java.png';
import hibernate from '../images/hibernate.png';
import sql from '../images/sql.png';

const Studies = () => {

  const { language, setLanguage } = useStateContext();

  return (
    <div className='w-full flex flex-col justify-center items-center overflow-auto cursor-default'>
      <h1 className='font-poppins font-semibold text-white text-[50px] sm:text-[80px] mt-4 sm:mt-[1%]'>{language.studies.title}</h1>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-white sm:text-[52px] text-[42px] font-poppins font-semibold mt-4 sm:mt-[0.8%]'>{language.studies.knowledge}</h1>
        <div className='w-[95%] flex flex-wrap mt-4 sm:w-[70%] sm:flex-row sm:flex-nowrap'>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col flex-grow justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={html} alt="Html Icon" className='h-[40px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>HTML 5</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={css} alt="CSS3 Icon" className='h-[40px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>CSS 3</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={js} alt="JS Icon" className='h-[38px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>JavaScript</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={react} alt="React Icon" className='h-[35px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>React</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={tailwind} alt="Tailwind Icon" className='h-[40px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>Tailwind CSS</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={java} alt="Java Icon" className='h-[44px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>Java</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={hibernate} alt="Hibernate Icon" className='h-[40px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>Hibernate</p>
              </div>
            </li>
            <li className='w-[50%] sm:w-full mt-3 list-none'>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex w-[60px] h-[60px] rounded-full bg-white justify-center items-center'>
                  <img src={sql} alt="SQL Icon" className='h-[25px]' />
                </div>
                <p className='text-white text-[24px] font-poppins cursor-default mt-2 hover:font-semibold hover:text-[28px] duration-300'>SQL</p>
              </div>
            </li>
        </div>
      </div>
      <div className='w-full flex flex-col items-center sm:mt-[3%] mt-6'>
        <h1 className='text-white text-center sm:text-[50px] text-[38px] font-poppins font-semibold'>{language.studies.at}</h1>

        <h3 className='text-white text-center sm:text-[32px] text-[26px] font-poppins sm:mt-[1%] mt-4'>{language.studies.pS}</h3>
        <p className='text-white text-center sm:text-[22px] text-[18px] font-poppins mt-2'>{language.studies.pSInfo}</p>

        <h3 className='text-white text-center sm:text-[32px] text-[26px] font-poppins sm:mt-[1.7%] mt-6'>{language.studies.hS}</h3>
        <p className='text-white text-center sm:text-[22px] text-[20px] font-poppins mt-2 sm:mb-0 mb-8'>{language.studies.hSInfo}</p>
      </div>
    </div>
  )
}

export default Studies