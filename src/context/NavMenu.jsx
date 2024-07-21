import React,{createContext,useEffect,useState} from 'react'

export const NavContext = createContext()

function NavMenu({children}) {
    const [menu, setMenu] = useState(false)

    const menutoggle = () => {
     setMenu(!menu)
    
    }
    useEffect(() => {
      const menuOut = () => {
        if (window.innerWidth > 1023) {
          setMenu(true);
          
        } else {
          setMenu(false);
          
        }
      };
      menuOut();
  
      window.addEventListener("resize", menuOut);
  
      return () => window.removeEventListener("resize", menuOut);
    }, []);
  
  
    

  return (
    <NavContext.Provider value={{menu,menutoggle}}>
        {children}
    </NavContext.Provider>
  )
}

export default NavMenu