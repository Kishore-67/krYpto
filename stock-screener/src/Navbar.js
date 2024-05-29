import React, {useState} from 'react';

import {NavLink} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
   const[menuOpen,setMenuOpen]  = useState(false)
  return (
    <nav class="nav">
        
        <div className='material-symbols-outlined'>KrYpto</div>
        <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen);
        }}
        >
         
          
        </div>
        <ul className={menuOpen ? "open":""}>
          
        <li><NavLink to="/Home">Home</NavLink></li>   
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>   
        <li><NavLink to="/Crypto">Crypto</NavLink></li>          
        <li><NavLink to="/Wishlist">Transactions</NavLink></li>      
        <li><NavLink to="/Login">Sign in</NavLink></li>          

        </ul>



    </nav>
  );
};

export default Navbar