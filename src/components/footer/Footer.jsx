import React from "react";
import {BsLinkedin,BsGithub,BsFacebook} from "react-icons/bs";
import "./footer.css";
function Footer(){
  return <footer>
<a href="#" className="footer_logo">Sajib Ahmed</a>
<ul className="permalinks">
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
</ul>



<div className="footer_socials">
<a href="https://www.linkedin.com/in/sajib-ahmed-2537a61ab/" target="_blank"><BsLinkedin/></a>
<a href="https://github.com/sajib15" target="_blank"><BsGithub/></a>
<a href="https://www.facebook.com/sajibahmed.shanto.37/" target="_blank"><BsFacebook/></a>
</div>

<div className="footer_copyright">
<small>@copy :Sajib Ahmed</small>
</div>
  </footer>
}
export default Footer;
