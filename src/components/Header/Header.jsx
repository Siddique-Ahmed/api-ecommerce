import React, { useState } from "react";
import img from "../../assets/logo.png";

const Header = () => {

  const [isOpen,setIsOpen] = useState(false)

  const toggleHamburger = ()=>{
    setIsOpen(!isOpen)
  }


  return (
    <div className="header">
      <nav>
        <div className="l-side">
          <img src={img} />
        </div>
        <div className={isOpen ? "r-side open" : "r-side"}>
          <div className="login-signup">
            <button className="login">Login</button>
            <button className="signup">Signup</button>
          </div>
          <div className="lang">
            <select name="lang" id="lang">
              <option value="Eng">Eng</option>
              <option value="Urdu">Urdu</option>
              <option value="Euro">Euro</option>
            </select>
          </div>
        </div>
        <div className="cart">
        <i onClick={toggleHamburger} className="fa-solid fa-bars"></i>
          <button className="fa-solid fa-cart-shopping"></button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
