import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-white text-4xl font-bold cursor-pointer"> 
          Linden Hamer  
        </h1>
      </Link>
      
        <div>
          <Link to="/about">
            <button className="text-white pr-4"> About </button>
          </Link>
          <Link to="/contact">
            <button  className="border bg-gray-300 text-black border-gray-300 ml-3 px-6 py-2 rounded cursor-pointer"> Contact </button>
          </Link>  
        </div> 
       
    </div>
  )
}

export default Navbar;