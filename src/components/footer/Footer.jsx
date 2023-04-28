import React from 'react';
import logo from '../../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer>
      <div className="container1">
        <img className='img1'
        src={logo} alt="founder" />
        <p className='p1'>Our founder</p>
      </div>
      <aside>
        <h2 className='h2'>Details section</h2>
        <h4 className='h4'>Youtube</h4>
        <h4 className='h4'>instagram</h4>
        <h4 className='h4'>Youtube</h4>
        <h4 className='h4'>instagram</h4>
      </aside>
      <div className="last">
        <h2 className='h2'>Details section</h2>
        <h4 className='h4'>Youtube</h4>
        <h4 className='h4'>instagram</h4>
        <h4 className='h4'>Youtube</h4>
        <h4 className='h4'>instagram</h4>
      </div>
    </footer>
  );
};

export default Footer;
