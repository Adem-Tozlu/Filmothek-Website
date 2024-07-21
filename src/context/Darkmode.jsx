import React,{createContext,useEffect,useState} from 'react'

export const DarkModeContext = createContext()

function Darkmode({children}) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDarkMode]);
    
      
      const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
      };


  return (
    <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}

export default Darkmode