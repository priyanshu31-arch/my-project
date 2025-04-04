import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className="h-35">
      <div className="align-middle font-mono font-bold text-center text-2xl p-5 text-blue-40 bg-gray-300" >
      Welcome to the Page... 
    
      </div>  
      <div className="justify-between flex flex-auto bg-amber-400 p-7 mb-10 ">
        <div  className="border-spacing-3.5 text-blue-950">
        <Link to="/">Home</Link>
        </div>

        <div className="border-spacing-3.5 text-blue-950"><Link to="/note">Note</Link></div>
      </div>
     
    </div>
  );
}

export default Navbar;