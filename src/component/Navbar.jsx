import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="align-middle font-mono font-bold size-12 text-blue-40 bg-gray-300" >
      Welcome to the Page... 
    
      </div>  
      <div className="justify-between flex flex-auto">
        <div  className="border-spacing-3.5 text-blue-950">
        <Link to="/">Home</Link>
        </div>

        <div className="border-spacing-3.5 text-blue-950"><Link to="/note">Note</Link></div>
      </div>
    </div>
  );
}

export default Navbar;