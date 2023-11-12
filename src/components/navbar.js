import React from 'react'
import "./navbar.css";
import image1 from "../assets/navbar1.jpg"
import image2 from "../assets/navbar2.jpg"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
            <div className='header'>
                MY JEWELRY STORE
            </div>
            <div className='icons'>
                <div>
                    <Link to="/"><img src={image1} alt='Icon 1'></img></Link>
                </div>
                <div>
                    <Link to="/cart"><img src={image2} alt="Icon 2"></img></Link>
                    
                </div>
            </div>
        </div>
  )
}

