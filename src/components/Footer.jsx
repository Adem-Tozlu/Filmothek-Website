import React,{useContext} from 'react'
import { NavContext } from "../context/NavMenu";

function Footer() {
    const { setMenu } = useContext(NavContext);
    return (
        <footer className=' dark:bg-black bg-white dark:text-gega-grey' onClick={()=>setMenu(false)}>
            {/* Footer Container */}
            <div className="container flex flex-col md:flex-row px-10 lg:px0 pb-8">
                {/* Left */}
                <div className="basis-1/3">
                    <a href="#" className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-gega-red to-gega-grey">
                        GEGA
                    </a>
                    <p className='text-sm mt-2'>2024 Adem Tozlu No &copy; COPYRIGHT</p>
                </div>
                {/* Middle */}
                <div className='basis-1/3'>
                    <h2 className='mb-2 text-gega-red uppercase'>Links</h2>
                    <div className='grid grid-cols-5 gap-2 uppercase'>
                        <a className='col-span-2 hover:text-gega-melon duration-500 ' href="#">Movies</a>
                        <a className='col-span-2 hover:text-gega-melon duration-500 ' href="#">Celebrities</a>
                        <a className='col-span-2 hover:text-gega-melon duration-500 ' href="#">Blog</a>
                        <a className='col-span-2 hover:text-gega-melon duration-500 ' href="#">News</a>
                        <a className='col-span-2 hover:text-gega-melon duration-500 ' href="#">About</a>
                    </div>
                </div>
                {/* Right */}
                <div className="basis-1/3">
                    <h2 className='mb-2 text-gega-red uppercase'>Follow us</h2>
                    <form action="" className='flex'>

                        <input type="email" placeholder='TYPE YOUR EMAIL' className=' placeholder:text-xs outline-none py-0 sm:py-1 px-0 sm:px-2 bg-transparent border border-gega-red' />
                        <button className='py-0 sm:py-1 px-0 sm:px-2 border border-gega-red bg-gega-red font-gemunu uppercase'>Subscribe</button>
                    </form>
                </div>


            </div>



        </footer>
    )
}

export default Footer