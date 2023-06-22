import React from 'react'

import {BiTimeFive} from 'react-icons/bi'

// photos

import apple from '../../Assets/apple.png'
import google from '../../Assets/google.png'
import scale from '../../Assets/3scale.png'
import lacoste from '../../Assets/lacoste.png'






const Data = [
  {
    id:1,
    image:apple,
    title: 'Mobile Developer',
    time: 'Now',
    location: 'USA',
    desc: 'Searching for Mobile Developer (Java)',
    company: 'Apple Co.'
  },
  {
    id:2,
    image:google,
    title: 'Web Developer',
    time: '7Hrs',
    location: 'South Africa',
    desc: 'Searching for Web Developer (Front-end)',
    company: 'Google Co.'
  },
  {
    id:3,
    image:scale,
    title: 'UI/UX designer',
    time: '4Hrs',
    location: 'Spain',
    desc: 'Searching for UI/UX designer',
    company: '3SCALE Co.'
  },
  {
    id:4,
    image:lacoste,
    title: 'Web developer',
    time: '5Hrs',
    location: 'France',
    desc: 'Searching for Web developer (Back-end)',
    company: 'Lacoste Co.'
  }
]

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return (
              <div key={id} className="group group/item singleJob W-full sm:w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                 <span className="flex justify-between items-center gap-4">
                   <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                   <span className='flex items-center text-[#ccc] gap-1'>
                     <BiTimeFive/> {time}
                   </span>
                 </span>
                 <h6 className='text-[#ccc]'>{location}</h6>
                 <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
       
                 <div className='company flex items-center gap-2'>
                   <img src={image} alt="logoes" className='w-[5%] rounded-[5px]' />
                   <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                 </div>
       
                 <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[16px] font-semibold text-textColor hover:bg-white    group-hover/item:text-textColor group-hover:text-white '>Apply Now</button>
            </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Jobs
