import React from 'react'
import { Plus,Search } from 'lucide-react'
const Post = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <h1 className='font-body text-3xl font-bold'>Hello User !</h1>

      <div className='flex gap-2 relative'>
        <span className='absolute top-3 left-2'><Search/></span>
        <input type="text" className='input-base w-full font-body ' placeholder='search here...' />
        <button className='px-6 py-3 w-[250px] font-body font-medium bg-accent hover:bg-accent-hover active:bg-accent-active dark:bg-accent-dark dark:hover:bg-accent-darkHover dark:active:bg-accent-darkActive cursor-pointer rounded-lg text-white  flex justify-center items-center text-lg'>New Post <Plus/></button>
      </div>

      <h1 className='font-body text-2xl font-normal text-light-secondary dark:text-dark-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis, vel eligendi praesentium saepe sed.</h1>
    </div>
  )
}

export default Post
