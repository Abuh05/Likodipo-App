import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
       <span><Link  style={{textDecoration:'none', color:'white'}} to="/" >Home</Link></span>
       <span><Link  style={{textDecoration:'none', color:'white'}} to="/about" >About</Link></span>
       <span><Link  style={{textDecoration:'none' , color:'white'}} to="/contact" >Contact</Link> </span>
        <span><Link  style={{textDecoration:'none', color:'white'}} to="/form" >Sign Up</Link></span>  
    </div>
  )
}

export default Navbar