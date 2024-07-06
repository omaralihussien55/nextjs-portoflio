import React, { FC } from 'react'
import GlobalSectionTitle from './GlobalSectionTitle'
import { ArrayProject } from './data'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='my-5' id='projects'>
          <GlobalSectionTitle>Projrcts</GlobalSectionTitle>
          
          <div className='flex flex-wrap '>
              
              {ArrayProject.map((item, idx) => {
                  return (
                      <div key={idx} className='w-full  self-stretch sm:w-1/2 md:w-4/12 lg:w-3/12 mb-3'>
                             <Card item={item} />
                      </div>
                  )
              })}
              
          </div>
    </div>
  )
}

export default Projects


const Card: FC<{
    item: {
     api:string,
    select:string,
    photo: any,title:string,
    info:string,link:string,
}}> = ({item}) => {
    return (
<div className="overflow-hidden rounded-lg border bg-gray-50 border-gray-100  shadow-sm mx-2 h-full">
  <Image
    alt=""
    src={item.photo?.src}
    
                className="h-56 w-full object-cover"
                height={100}
                width={200}
    
  />

  <div className="p-4 sm:p-6">
    <a href="#">
      <h3 className="text-lg font-medium text-gray-900">
        {item.title}
      </h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {item.info}
    </p>

    <a href={item.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      view site

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </a>
  </div>
</div>
    )
}


