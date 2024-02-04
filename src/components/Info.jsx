import React from 'react';
import { useStateContext } from '../context/ContextProvider';

import reactinfo from "../images/reactinfo.png";
import tailwindinfo from "../images/tailwindinfo.png";
import vite from "../images/vite.png";
import { AiFillLinkedin } from "react-icons/ai";

const Info = () => {

  const { language, setLanguage } = useStateContext();

  return (
    <section className='flex flex-col w-full items-center justify-center mt-8 cursor-default overflow-auto'>
      <h1 className='font-poppins font-semibold text-white text-[50px] sm:text-[60px]'>{language.info.title}</h1>
      <p className='text-white text-[24px] sm:text-[26px] font-poppins text-center w-[90%] sm:mt-[1.6%] mt-8'>
        {language.info.info1}
      </p>
      <p className='text-white text-[20px] sm:text-[22px] font-poppins text-center w-[90%] sm:mt-[1%] mt-8'>{language.info.info2}</p>
      <section className='flex flex-col w-full items-center justify-center sm:mt-[2.5%] mt-12'>
        <p className='text-white text-[32px] font-poppins text-center'>{language.info.infoCreated}</p>
        <aside className='flex flex-col sm:flex-row w-[40%] items-center justify-evenly sm:mt-[2.3%] mt-6'>
          <img src={reactinfo} alt="React logo" className='h-[120px] w-[120px]' />
          <img src={tailwindinfo} alt="Tailwind logo" className='h-[130px] w-[130px] sm:mt-0 mt-3'/>
          <img src={vite} alt="Vite logo" className='h-[110px] w-[110px]sm:mt-0 mt-3'/>
        </aside>
      </section>
      <p className='flex items-center justify-center w-[90%] text-white text-[18px] mt-[15%]'>
        {language.info.moreInfo} 
        <a href="https://www.linkedin.com/in/jesus-martinez-lopez-123373261/">
          <AiFillLinkedin className='ml-4 text-[28px] cursor-pointer'/>
        </a>
      </p>
    </section>
  )
}

export default Info