import React from 'react'
import GlobalSectionTitle from './GlobalSectionTitle'

const Services = () => {
    return (
       <div className='my-6' id='services'>
          <GlobalSectionTitle>Services</GlobalSectionTitle>
          
  
    <div className='flex flex-wrap   mx-auto gap-3 justify-center'>
          <div className='w-full  md:w-1/2 lg:w-4/12 '>
              <CardServices title='Responsive Site'
                  info='A site that supports all screen sizes from mobile phones to computers,'
                 
              />
          </div>
        <div className='w-full  md:w-1/2 lg:w-4/12 '>
          <CardServices title='Flexible Site' info='Flexible and streamlined website design with ease for the user'/>
          </div>
            </div>
              </div>
  )
}

export default Services



const CardServices:React.FC<{title:string,info:string}> = ({title,info}) => {
    
    return (
<div
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">

      <h3 className="mt-0.5 text-lg text-center font-bold text-gray-900">
        {title}
      </h3>
    

    <p className="mt-4 p-2 text-gray-500">
      {info}
    </p>
  </div>
</div>
    )


}