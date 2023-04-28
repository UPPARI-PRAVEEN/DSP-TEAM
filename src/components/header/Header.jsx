/*import React from "react";
import { IoFastFoodOutline, IoLogoVimeo } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from '../../assets/logo.jpeg'
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
    return (


        /*<nav>
          <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
            <img src={logo} alt="logo" />
          </motion.div>
        
          <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/checkout">Checkout</Link>
          </div>
        </nav>*/
       

import React, { useState } from 'react';
import { AiOutlineMenu, } from 'react-icons/ai';
import {  IoPerson} from 'react-icons/io5';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className="navBtn" onClick={toggleMenu}>
        <AiOutlineMenu />
      </button>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
            <img src={logo} alt="logo" />
          </motion.div>
    <div>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link to="/products" onClick={() => setMenuOpen(false)}>
        products
      </Link>
      <Link to="/checkout" onClick={() => setMenuOpen(false)} >
        checkout
      </Link>
      <Link to="/login" onClick={() => setMenuOpen(false)} className='login'>
      <IoPerson/>
      </Link>
      
    </div>
    <a>
      <button>Email</button>
    </a>
  </>
);

export default Header;
