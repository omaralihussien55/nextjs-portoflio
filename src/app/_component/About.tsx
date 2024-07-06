import React from 'react'
import GlobalSectionTitle from './GlobalSectionTitle'
import Image from 'next/image'
import Motion from './Motion'

const About = () => {
    return (
    <div className='my-5' id='about'>
          <GlobalSectionTitle>About</GlobalSectionTitle>
          
          <div className=' mx-auto flex flex-wrap md:flex-nowrap gap-3 '>
              <div className='w-full xl:w-1/2'>
                  <Image
                      src={"https://res.cloudinary.com/dyhdun4ak/image/upload/v1719936697/tablet-coffee_euis4j.jpg"}
                      style={{ width: "100%", height: "100%" }}
                      alt=''
                      width={200}
                      height={200}
                  />
              </div>

             <div className='w-full xl:w-1/2'>
                  <div className='w-full h-full  p-4 bg-white shadow-2xl '>
                      <div className='mb-2'>
                                  <h4 className='p-1 my-4 text-2xl font-bold text-primary_dark '>I am Omar Ali,</h4>
                                  <p className='p-1 text-gray-400 text-lg '>front-end developer interested in information technology and responsible for designing the visual appearance and usability of the website.</p>
               
                      </div>
                      <div className='mb-2'>
                          <h5 className='p-1 my-4 text-primary_dark text-xl font-bold '>I have some skills</h5>
                          <p className='p-1 text-gray-400 text-lg '>I have good knowledge of design and programming languages s​​uch as html, css, javascript, bootstrap, jquery, react ,redux-toolkit,typeScript,matrial ui, matrial table, react-query</p>
                          
                      </div>


                      <div className='mb-4'>
                          <ul className='w-full '>
                              <li className='p-1 mb-1 text-gray-700 font-semibold text-xl'>I can design a responsive website for all screens</li>
                              <li className='p-1 mb-1 text-gray-700 font-semibold text-xl'>Ability to work on closed deadlines</li>
                              <li className='p-1 mb-1 text-gray-700 font-semibold text-xl'>Strong creative skills in web design</li>
                              <li className='p-1 mb-1 text-gray-700 font-semibold text-xl'>I have some work you can look at</li>
                          </ul>
                        </div>
                        
                        

                      <button className='p-2 rounded-lg bg-primary_dark text-white'>View Work</button>
                 </div>
                </div>
                

                
          </div>
            </div>
   
  )
}

export default About
