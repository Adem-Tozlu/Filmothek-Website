import { IoIosSearch } from "react-icons/io";


function Header() {
  return (
    <header className="bg-black py-6 lg:py-12 text-gega-grey uppercase">
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        {/* Logo */}
        <a href="#" className="pl-4 md:pl-0 text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
          GEGA
        </a>

        {/* Mobile Menu*/}
        <div className="block md:hidden pr-4 ">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>
            <div className="bg-gega-grey w-8 h-1 rounded-full"></div>


          </div>

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
