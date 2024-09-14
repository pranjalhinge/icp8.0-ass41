 import React from 'react'
 import './nav.css'
 import { Link } from 'react-router-dom'
 
 function Navbar() {
   return (
     <div className='nav-container'>
        <h1 className='logo'>👻</h1>
        <div className='nav-item'>
        <Link to='/' className='links' >Home</Link>
        <Link to='/about' className='links' >About</Link>
        
        <Link to='/contact' className='links' >Contact</Link>
        </div>
     </div>
   )
 }
 
 export default Navbar