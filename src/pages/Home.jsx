import React from 'react'

function Home() {
  return (
    <>
     <div className="relative p-31 w-full overflow-hidden font-sans">
        {/* Blurred Background */}
        <div className="absolute inset-0 h-full bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center filter  brightness-19"></div>

        {/* Foreground Text */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-white text-center px-4 font-sans">
          <h1 className="text-[15px] uppercase tracking-widest"> Prefix describing what your business does will be here</h1>
          <h2 className="text-[50px] sm:text-[40px] font-semibold mt-4">We Will Write a Headline</h2>
          <h2 className="text-[50px] sm:text-[40px] font-semibold"> Highlighting Your Business</h2>
           <h2 className="text-[50px] sm:text-[40px] font-semibold">Offerings Here</h2>
          <button className='bg-[#2A9D8F] w-[180px] h-[40px] mt-10'>CALL TO ACTION</button>
        </div>
      </div>

      {/* 2nd section */}


    </>
  )
}

export default Home