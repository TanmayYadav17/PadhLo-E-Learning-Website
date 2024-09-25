import React from 'react'
import "./footer.css"
import { FaFacebook  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
        <p>  
          &copy; 2024 <span className="custom-fontt">PadhLo</span>.    All rights reserved. <br />  
          Made by <a href="https://github.com/TanmayYadav17">Tanmay Yadav</a>  
        </p> 
        </div>
    </footer>
  );
}

export default Footer