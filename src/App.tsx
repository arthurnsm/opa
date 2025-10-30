import './App.css'
import Navbar from '../src/components/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import { AnimatePresence } from "framer-motion";
function App() {

  return (


    <AnimatePresence mode="wait">
      <div key={location.pathname}></div>
    <nav >
      <Navbar/>
    </nav>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </AnimatePresence>
    
  )
}

export default App
