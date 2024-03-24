import './index.css'

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
function App() {
  return (
      <div className="text-4xl">
        <Navbar />
        <Outlet />
       
      </div>
  )
}

export default App
