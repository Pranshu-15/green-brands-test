import React from 'react';
import profilePic from '../media/profile-pic.jpg'

const LeftSectionPartTwo = () => {
  return (
    <>
          <div className="w-full h-72 ">
        <img 
        className=" w-full h-full object-cover bg-no-repeat bg-cover"
        src={profilePic} 
        alt="profile-pic"/>
      <div className='absolute top-80   w-auto'>
      <h1 className=" text-white font-bold ml-7 text-xl ">Jessica Anderson</h1>
        <p className=" text-white font-medium ml-7 text-xs">&#64;jessica-anderson-2</p>
      </div>
        
      </div>
    </>
  )
}

export default LeftSectionPartTwo