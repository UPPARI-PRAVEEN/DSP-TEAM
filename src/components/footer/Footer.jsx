


import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
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

        <p className="m"><i className="fa fa-envelope"></i>uppripraveen2003@gmail.com</p>
        <p className="m"><i className="fa fa-envelope"></i>dharaneeshreddy18@gmail.com</p>
        <p className="m"><i className="fa fa-envelope"></i>sowjanyareddynaruvadi@gmail.com</p>
      </div>

      <aside>
        <h2 className="social">Social Media</h2>

        <article>

          <a className="m" href="https://www.linkedin.com/in/dharaneesh-reddy-265825240"><i className="fa fa-linkedin"></i>Dharaneesh Reddy</a>
          <a className="m" href="https://www.linkedin.com/in/uppari-praveen-012975244"><i className="fa fa-linkedin"></i>Uppari praveen</a>
          <a className="m" href="https://www.linkedin.com/in/nsr-sowji-suri-271558234"><i className="fa fa-linkedin"></i>Sowjanya Reddy</a>

        </article>
      </aside>

    </footer>
  );
};

export default Footer; 