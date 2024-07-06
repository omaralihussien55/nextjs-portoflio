import React from 'react'
const HomeBanners = () => {
  return (
    <section className="bg-gray-50 bg-image-home relative">
       <div
    className="absolute bg-image-home-overlay w-full h-full top-0 left-0  z-0"
  ></div>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen relative z-10 ">
              <div className="mx-auto max-w-xl ">
                  <h5 className="text-xl font-extrabold sm:text-2xl mb-1 text-white">Welcome !</h5>
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
       <span className='block'> I'm Omar</span>
            <strong className="strong-banners font-extrabold text-primary_dark sm:block mt-1 relative"><span className='span-blind'></span> Front-end Developer</strong>
            
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-white">
       Building the front end of websites and web applications
      </p>

          <div className="mt-8 flex flex-wrap  gap-4">
        <a
          className=" w-full block text-center rounded bg-primary_dark px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary_main focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
         href={"https://res.cloudinary.com/dyhdun4ak/image/upload/v1720197105/twq5vnrcrv41owfkakfi.pdf"}
        >
         DownLoad Cv
        </a>
   
      </div>
    </div>
  </div>
</section>
  )
}

export default HomeBanners
