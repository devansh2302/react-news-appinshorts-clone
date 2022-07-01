import React from 'react';
import "./Navbar.css";
import Hamburgerdrawer from "./Hamburgerdrawer"


const Navbar = ({ setCategory }) => {
  return (
    <div className='nav'>
      <div className='icon'>
        <Hamburgerdrawer setCategory={setCategory} />
      </div>
      <img style={{ cursor: "pointer", }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height="50" alt="logo" />
    </div>
  )
}

export default Navbar
