import React from 'react';
import '../pages/home.css'

export default function TypedText() {

  return (
    <div className='animate-charcter scale-[0.9] text-white md:text-[40px] mt-[-60px]'>
      {/* <Typed 
          className='w-[100px]'
          strings={[
            `Hello, I am Luka Barbakadze`
          ]}
          startDelay={1000}
          typeSpeed={150}
          backSpeed={100}
          // loop={1}
          showCursor={false}
        />
        <Typed
          strings={[
            `<br>I'm a Web Developer`,
          ]}
          startDelay={6550}
          typeSpeed={150}
          backSpeed={100}
          // loop={1}
          showCursor={true}
        /> */}
        Hello, I am Luka Barbakadze
        <br />
        I'm a Web Developer
        {/* <span className='animate-pulse'>|</span> */}
    </div>
  )
}
