import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
function App() {
  
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        
      </div>

    </div>
   </BrowserRouter>
  )
}

export default App
