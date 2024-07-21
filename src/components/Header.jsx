import { IoIosSearch } from "react-icons/io";
import { FaRegSun } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import React, { useContext} from "react";

import { NavContext } from "../context/NavMenu";
import { DarkModeContext } from "../context/Darkmode";


function Header() {
  
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { menu, menutoggle } = useContext(NavContext);
 


  


 
  return (


    <header className="dark:bg-black bg-white py-6 lg:py-12 dark:text-gega-grey text-black uppercase ">
      <div className="absolute top-1 right-5  cursor-pointer text-lg">

        {isDarkMode ? (<IoMdMoon onClick={toggleDarkMode} className= "text-white w-6 md:w-5 lg:w-7 h-auto"  />):(<FaRegSun onClick={toggleDarkMode} className="text-black w-6 md:w-5 lg:w-7 h-auto" />)}
      
      

      </div>
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        {/* Logo */}
        <a href="#" className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
          GEGA
        </a>
        <form className="md:hidden absolute right-14" >
            <div className=" border-gega-red whitespace-nowrap">
              <input type="text" className="opacity-0 group hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500" />
              <button className=""><IoIosSearch className="group-hover:text-gega-red transition duration-500"/>
              </button>
            </div>

          </form>
        {/* Mobile Menu*/}
        <div className="relative z-10 pr-4 block md:hidden " onClick={menutoggle}>
          <div className="space-y-1 cursor-pointer ">
            <div className="dark:bg-gega-grey bg-black w-8 h-1 rounded-full"></div>
            <div className="dark:bg-gega-grey bg-black w-8 h-1 rounded-full"></div>
            <div className="dark:bg-gega-grey bg-black w-8 h-1 rounded-full"></div>



          </div>

          {menu && (
     <nav className=" dark:bg-black/[.54] bg-white/[.54] absolute text-lg grid right-0 top-11 gap-2 z-10 mt-2 pl-2 pr-10 w-auto">
     {/* Menu */}
    
     <div className=" grid w-full gap-2 z-10 ">
       <a
         href="#"
         className="hover:text-gega-melon transition duration-500"
       >
         movies
       </a>
       <a
         href="#"
         className="hover:text-gega-melon transition duration-500"
       >
         celebrites
       </a>

       <a
         href="#"
         className="hover:text-gega-melon transition duration-500"
       >
         blog
       </a>

       <a
         href="#"
         className="hover:text-gega-melon transition duration-500"
       >
         news
       </a>
       <a
         href="#"
         className="hover:text-gega-melon transition duration-500"
       >
         about
       </a>
     </div>
     {/* Login Area */}
     <div className="grid z-10">
     {/* Search Area */}
   
               {/* Signup Area */}
       <div className=""></div>

<a href="#">Login</a>
<a href="#" className="-ml-2 pl-2  bg-gega-red hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap">Sign Up</a>


     </div>

   </nav>
      )}

  
        </div>


        {/* Navigation */}
        <nav className="hidden md:flex justify-between flex-1">
          {/* Menu */}
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              movies
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              celebrites
            </a>

            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              blog
            </a>

            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              news
            </a>
            <a
              href="#"
              className="hover:text-gega-melon transition duration-500"
            >
              about
            </a>
          </div>
          {/* Login Area */}
          <div className="flex items-center space-x-4 lg:space-x-8">
          {/* Search Area */}
          <form >
            <div className="group border-r px-4 mx-4 py-1 border-gega-red">
              <input type="text" className="opacity-0 group hover:opacity-100 bg-transparent border-b border-gega-red focus:outline-none w-24 lg:w-44 transition duration-500" />
              <button className="-ml-4 group-hover:ml-0 transition duration-500"><IoIosSearch className="group-hover:text-gega-red transition duration-500"/>
              </button>
            </div>

          </form>
                    {/* Signup Area */}
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg"></div>

<a href="#">Login</a>
<a href="#" className="bg-gega-red px-3 py-1 hover:bg-rose-600 hover:text-gega-grey cursor-pointer transition duration-500 whitespace-nowrap">Sign Up</a>


          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
