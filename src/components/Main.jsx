import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function Main() {
  return (
    <main>
         {/* Hero Section */}
         <section className='h-64 md:h-96 lg:h-128 group relative'>
{/* Hero Image */}

<img src="./public/images/batman.jpg" alt="batman image" className='h-full w-full object-cover'/>

{/* Hero Content */}
<div className='absolute bottom-0 w-full bg bg-gradient-to-b from-transparent to-black'>
{/* Hero Content Container*/}
<div className='container pl-10 lg:pl-0'>
<h3 className='text-gega-melon tracking-wider group-hover:mb-1 duration-500'>Action,Drama,Thriller</h3>
<h1 className='text-4xl lg:text-6xl text-gega-grey group-hover:mb-1 duration-500'>The Dark Knight</h1>
<p className=' text-gega-grey group-hover:mb-2 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptatibus asperiores doloremque ratione laudantium nobis maxime sequi atque voluptates hic.</p>
{/* Detail Container*/}

<div className='flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000  '>
{/*Watch*/}
<div className='flex space-x-2 items-center cursor-pointer '>
    <a href="#" className='text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500'>Watch Trailer</a>
    <div className='flex h-8 w-8 rounded-full text-center justify-center bg-gega-red text-gega-grey items-center'><FaPlay />
    </div>
</div>
{/*Info*/}
<div className='flex space-x-2 items-center cursor-pointer '>
    <a href="#" className='text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500'>Full Synopsis</a>
    <div className='flex h-8 w-8 rounded-full text-center justify-center bg-gega-red text-gega-grey items-center'><FaArrowRight />

    </div>
</div>
</div></div></div>


{/*Points*/}
<div className='flex space-x-3 absolute bottom-5 opacity-0 left-10 group-hover:opacity-100 duration-1000'>
    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-red'></div>
    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey'></div>
    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey'></div>
    <div className='w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey'></div>
</div>
         </section>
          {/* Movies Section */}
         <section className='py-24 bg-black'>
          {/* Movies Content */}
          <div className="container flex space-x-16">
          {/* Left Content */}
          <div className='basis-2/3'>
           {/* titles */}
           <div className='flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8'>
            <h2 className='text-gega-red'><a href="#">Latest</a></h2>
            <h2 className='text-gega-grey pl-2 hover:text-gega-red duration-500'><a href="#">Popular</a></h2>
            <h2 className='text-gega-grey pl-2 hover:text-gega-red duration-500'><a href="#">Best</a></h2>
           </div>
            {/* Images Container */}
            <div className="flex flex-wrap">
            {/* Image 1*/}
            <div className="group relative overflow-hidden basis-1/3">
            <img src="./public/images/mv1.jpg" alt="image1" className='group-hover:scale-110 group-hover:opacity-50 duration-500'/>
            {/* Image Detail Container*/}
            <div className='absolute px-6 bottom-8'> 
            <h3>Oblivion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, at.</p>
            {/* Icon Container*/}
<div>
  <FaPlay />
</div>
            </div>

            </div>

            </div>
          </div>
          {/* Right Content */}
          <div className='basis-1/3 bg-blue-500'>
          Right Content
          </div>
          </div>
          
         </section>

    </main>
  )
}

export default Main