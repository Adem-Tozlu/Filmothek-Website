import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Darkmode from "./context/Darkmode"
import NavMenu from "./context/NavMenu"

function App() {


  return (
    <>
   
    <Darkmode>
    <NavMenu>
   <Header/>
   <Main/>
   <Footer/>
   </NavMenu>
    </Darkmode>
    
    </>
  )
}

export default App
