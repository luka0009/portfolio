import React from 'react';
import Typed from "react-typed";

export default function TypedText() {

  return (
    <div className='text-white md:text-[40px] mt-[-60px]'>
      <Typed 
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
        />
        {/* <Typed
          strings={[
            `<br>Front-End techniques`,
          ]}
          startDelay={10000}
          typeSpeed={150}
          backSpeed={100}
          // loop={1}
          showCursor={true}
        /> */}
    </div>
  )
}
