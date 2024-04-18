import './index.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="text-4xl">
        <Navbar />
        <Outlet />
      
      </div>
      <Footer />
      </div>
    
  )
}

export default App
