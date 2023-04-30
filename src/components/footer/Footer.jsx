


import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineMail,

} from "react-icons/ai";
//import { MdEmail } from "react-icons/io5"

import logo from '../../assets/logo.jpeg'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="container-s">
        <img className="logo-image"
          src={logo}
          alt="Founder"
        />

        <p className="m"><span className="Ai"><AiOutlineMail/></span>uppripraveen2003@gmail.com</p>
        <p className="m"><span className="Ai"><AiOutlineMail/></span>dharaneeshreddy18@gmail.com</p>
        <p className="m"><span className="Ai"><AiOutlineMail/></span>sowjanyareddynaruvadi@gmail.com</p>
      </div>

      <aside>
        <h2 className="social">Social Media</h2>

        <article>

          <a className="m" href="https://www.linkedin.com/in/dharaneesh-reddy-265825240"><span className="li"><AiFillLinkedin/></span>Dharaneesh Reddy</a>
          <a className="m" href="https://www.linkedin.com/in/uppari-praveen-012975244"><span className="li"> <AiFillLinkedin/></span>Uppari praveen</a>
          <a className="m" href="https://www.linkedin.com/in/nsr-sowji-suri-271558234"><span className="li"><AiFillLinkedin/></span>Sowjanya Reddy</a>

        </article>
      </aside>

    </footer>
  );
};

export default Footer; 