import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-96 lg:h-128 group relative">
        {/* Hero Image */}

        <img
          src="./public/images/batman.jpg"
          alt="batman image"
          className="h-full w-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute bottom-0 w-full bg bg-gradient-to-b from-transparent to-black">
          {/* Hero Content Container*/}
          <div className="container pl-10 lg:pl-0">
            <h3 className="text-gega-melon tracking-wider group-hover:mb-1 duration-500">
              Action,Drama,Thriller
            </h3>
            <h1 className="text-4xl lg:text-6xl text-gega-grey group-hover:mb-1 duration-500">
              The Dark Knight
            </h1>
            <p className=" text-gega-grey group-hover:mb-2 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              voluptatibus asperiores doloremque ratione laudantium nobis maxime
              sequi atque voluptates hic.
            </p>
            {/* Detail Container*/}

            <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000  ">
              {/*Watch*/}
              <div className="flex space-x-2 items-center cursor-pointer ">
                <a
                  href="#"
                  className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
                >
                  Watch Trailer
                </a>
                <div className="flex h-8 w-8 rounded-full text-center justify-center bg-gega-red text-gega-grey items-center">
                  <FaPlay />
                </div>
              </div>
              {/*Info*/}
              <div className="flex space-x-2 items-center cursor-pointer ">
                <a
                  href="#"
                  className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
                >
                  Full Synopsis
                </a>
                <div className="flex h-8 w-8 rounded-full text-center justify-center bg-gega-red text-gega-grey items-center">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Points*/}
        <div className="flex space-x-3 absolute bottom-5 opacity-0 left-10 group-hover:opacity-100 duration-1000">
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-red"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
        </div>
      </section>
      {/* Movies Section */}
      <section className="py-24 bg-black">
        {/* Movies Content */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          {/* Left Content */}
          <div className="basis-2/3 pl-10 lg:pl-0">
            {/* titles */}
            <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8">
              <h2 className="text-gega-red">
                <a href="#">Latest</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Popular</a>
              </h2>
              <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
                <a href="#">Best</a>
              </h2>
            </div>
            {/* Images Container */}
            <div className="flex flex-wrap">
              {/* Image 1*/}
              <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv1.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                   {/* Image 2*/}
                   <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv6.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                   {/* Image 3*/}
                   <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv2.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                   {/* Image 4*/}
                   <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv3.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                   {/* Image 5*/}
                   <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv4.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                   {/* Image 6*/}
                   <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
                <img
                  src="./public/images/mv5.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                 {/* Image 7*/}
                 <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                <img
                  src="./public/images/mv4.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
                 {/* Image 8*/}
                 <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
                <img
                  src="./public/images/mv4.jpg"
                  alt="image1"
                  className="group-hover:scale-110 group-hover:opacity-50 duration-500"
                />
                {/* Image Detail Container*/}
                <div className="absolute px-6 bottom-8">
                  <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">
                    Oblivion
                  </h3>
                  <p className="text xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt, at.
                  </p>
                  {/* Icon Container*/}
                  <div className="absolute flex space-x-8 text-gega-grey opacity-0 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                    <FaPlay className="cursor-pointer hover:text-gega-red duration-500" />
                    <FaArrowRight className="cursor-pointer hover:text-gega-red duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="basis-1/3 pl-10 lg:pl-0">
           {/* titles */}
           <h2 className="text-gega-grey mb-8">Hot News</h2>
            {/* News Container */}
            <div className="flex flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between flex-wrap lg:flex-nowrap space-y-4">
               {/* Item */}
               <div className="flex items-center group basis-3/4 md:basis-1/2">
                 {/* New Image Container */}
                 <div className="basis-1/3 h-full">
                 <img src="./public/images/new1.jpg" alt="image" className="h-full w-full object-cover" />
                 </div>
{/* Item Deatils */}
<div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
<p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, suscipit.</p>
<p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
</div>
               </div>
               {/* Item */}
               <div className="flex items-center group basis-3/4 md:basis-1/2">
                 {/* New Image Container */}
                 <div className="basis-1/3 h-full">
                 <img src="./public/images/new1.jpg" alt="image" className="h-full w-full object-cover" />
                 </div>
{/* Item Deatils */}
<div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
<p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, suscipit.</p>
<p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
</div>
               </div>
               {/* Item */}
               <div className="flex items-center group basis-3/4 md:basis-1/2">
                 {/* New Image Container */}
                 <div className="basis-1/3 h-full">
                 <img src="./public/images/new1.jpg" alt="image" className="h-full w-full object-cover" />
                 </div>
{/* Item Deatils */}
<div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
<p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, suscipit.</p>
<p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
</div>
               </div>
               {/* Item */}
               <div className="flex items-center group basis-3/4 md:basis-1/2">
                 {/* New Image Container */}
                 <div className="basis-1/3 h-full">
                 <img src="./public/images/new1.jpg" alt="image" className="h-full w-full object-cover" />
                 </div>
{/* Item Deatils */}
<div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
<p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, suscipit.</p>
<p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
</div>
               </div>
               {/* Item */}
               <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
                 {/* New Image Container */}
                 <div className="basis-1/3 h-full">
                 <img src="./public/images/new1.jpg" alt="image" className="h-full w-full object-cover" />
                 </div>
{/* Item Deatils */}
<div className="pl-8 basis-2/3 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
<p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, suscipit.</p>
<p className="text-xs tracking-tighter mt-2 font-bold font-gemunu">ON NOW 01 2022</p>
</div>
               </div>
          
            </div>

          </div>
        </div>
      </section>
       {/* Matrix Section */}
       <section className="bg-gega-white mb-24 ">
{/* Matrix Container */}
<div className="container flex items-center justify-center relative pl-10 lg:pl-0  ">
  {/* Left Content */}
  <div className="hidden md:block md:basis-1/3 lg:basis-1/2">
<img src="./public/images/matrix.png" alt="matrix image" className="lg:absolute lg:bottom-0" />

  </div>
  {/* Right Content */}
  <div className="md:basis-2/3 lg:basis-1/2">
  <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
<h3 className="tracking-wider text-gega-melon">ACTION, DRAMA, THRILLER</h3>
<h2 className="mb-2">Matrix Reloaded</h2>
<p className="text-sm mb-2" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis soluta eius odio voluptatibus iusto quisquam aliquam cum labore quo?</p>
<h3 className="tracking-wider text-gega-red">8 wins 34 nominations</h3>
  </div>


  </div>


 {/* Oldie*/}
 <div className="left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center" >
  <p className="font-gemunu uppercase font-bold text-xl text-gega-red -rotate-45">Oldie & Goldie</p>
 </div>
</div>



       </section>
    </main>
  );
}

export default Main;
