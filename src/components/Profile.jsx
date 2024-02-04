import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const Profile = () => {

  const {language} = useStateContext();
  return (
    <section className='flex w-full'>
      <div className='w-full flex flex-col justify-center items-center cursor-default'>
        <h1 className='font-poppins font-semibold text-white text-[50px] sm:text-[80px] mt-5 sm:mt-[1%]'>{language.profile.title}</h1>
        <h2 className='font-poppins font-semibold text-white text-[45px] sm:text-[70px] mt-4 sm:mt-[0.7%]'>{language.profile.name}</h2>
        <p className='w-full font-poppins text-white text-[30px] sm:text-[44px] text-center mt-4 sm:mt-[1.2%]'>
          · {language.profile.job}
        </p>
        <p className='w-[70%] font-poppins text-white text-[30px] sm:text-[42px] text-center mt-4 sm:mt-[1.2%]'>
          · {language.profile.profesion}
        </p>
        <p className='w-[75%] font-poppins text-white text-[24px] sm:text-[28px] text-center mt-7 sm:mt-[2.1%]'>
          {language.profile.info}
        </p>
        <p className='w-[75%] font-poppins text-white text-[24px] sm:text-[30px] text-center mt-5 sm:mt-[1.2%]'>
          {language.profile.skills}
        </p>

      </div>
      
    </section>
  )
}

export default Profile