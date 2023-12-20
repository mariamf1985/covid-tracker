import React from 'react'

const NavbarTracker = () => {
  return (
    <div className='flex flex-col items-center h-screen w-28 pt-5 bg-bisque '> 
      <button className="my-2 focus:outline-none animate-spin-slow w-14">
        <img src='../src/assets/images/coronavirus.png'></img> 
      </button>
      <button className="my-2 focus:outline-none w-12 h-12 hover:bg-secondarybg">
        <img src='../src/assets/images/quesito.png' className="w-full h-full" />
      </button>

    
    </div>
  )
}

export default NavbarTracker
