import React from 'react';

import jobdir from '../../Assets/jobdir.png';
import jj from '../../Assets/jj.png';
import pantera from '../../Assets/panther.png';

const Value = () => {
  return (
    <div className='mb-4 mt-6'>
      <h1 className="text-textColor text-[25px] py-8 pb-12 font-bold w-11/12 sm:w-400 block mx-auto">The value that holds us true and to account</h1>

      <div className="grid gap-8 sm:gap-[10rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={jobdir} alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Simplicity</span>
          </div>
          <p className='text-[25px] text-textColor font-semibold py-[1rem] opacity-[.7] '>Things being made beautiful simple are at the heart of everything we do.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={jj} alt="" className='w-[100%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Simplicity</span>
          </div>
          <p className='text-[25px] text-textColor font-semibold py-[1rem] opacity-[.7] '>We believe in things better for everyone, even if just by a little bit!</p>
        </div>
        
        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center ">
              <img src={pantera} alt="" className='w-[100%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] '>Simplicity</span>
          </div>
          <p className='text-[25px] text-textColor font-semibold py-[1rem] opacity-[.7] '>We work on the basis of creating trust which can be nurtured through authenticity and transparency.</p>
        </div>
      </div>

      <div className="card mt-[2rem] flex flex-col md:flex-row justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">Ready to switch a career?</h1>
          <h2 className="text-textColor text-[25px] font-bold">Then, here you go!</h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-gray-200 border-blueColor mt-4 md:mt-0'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
