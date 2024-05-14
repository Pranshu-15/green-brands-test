import React from 'react';
import cam from '../media/camera.svg';
import msg from '../media/comment.svg';
import lock from '../media/lock.svg';
import share from '../media/share.svg';
import edit from '../media/edit.svg'
const LeftSectionPartThree = () => {
  return (
    <>
          <div className="w-full h-80 bg-rose-800 ">
        <div className="absolute top-96 rounded-xl h-9 items-center text-xs left-2.5 bg-zinc-800 flex justify-between w-96">
            <div className='flex text-white ml-3'>
                <img className='w-4' src={cam} alt='cam'/>
                <p>0</p>
                <img className='w-4' src={msg} alt='msg'/>
                <p>6</p>
            </div>
            <div className='flex text-white mr-4'>
                <img className='w-4' src={lock} alt='lock'/>
                <p>Make Character Public</p>
                <img className='w-4' src={share} alt='share'/>
            </div>
        </div>
        <div className="absolute top-2/3 rounded-xl h-60 items-center text-xs left-2.5 bg-zinc-800 flex justify-between w-96">
            <div className=' text-white ml-3 w-1/2 -mt-8'>
           <h1 className='text-base font-bold'>Who I am</h1>
           <h1 className='text-base font-bold'>Personality</h1>
           <p>Caregiver</p>
           <h1 className='text-base font-bold'>Work</h1>
           <p>Yoga Instructor</p>
           <h1 className='text-base font-bold'>Hobbies</h1>
           <p>Anime Fan</p>
           <h1 className='text-base font-bold'>Relationship</h1>
           <p>Friend</p>
            </div>
            <div className='flex-col w-1/2 '>

            <div className='flex text-white mr-4 justify-between mb-2'>
                <h1 className='text-base font-bold'>About Me</h1>
                <img className='w-4' src={edit} alt='share'/>
            </div>
            <p className='text-white text-sm'>21-year-old anime fanatic and yoga Instructor. I binge-watch anime! Looking for someone to join me in downward dog and anime marathons. Fun fact: I can recite the entire script of my favorite anime movie from memory. Let's chat!</p>
            </div>
        </div>
     
      </div>
    </>
  )
}

export default LeftSectionPartThree