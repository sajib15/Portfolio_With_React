import React from "react";
import CTA from "./CTA";
import ME from "../../assets/sajib7.png";
import HeaderSocials from "./HeaderSocials"
import './header.css';
function Header(){
  return <header >
<div className="container header_container">

<h5>Hello I'm</h5>
<h1>Sajib Ahmed</h1>
<h5 className="text-light">Web developer, Cybersecurity and AI researcher</h5>
<CTA/>
<HeaderSocials/>
<div className="me">
<img src={ME} alt="Me"/>
</div>
<a href="#contact" className="scroll_down">Scroll Down</a>


</div>

  </header>
}
export default Header;
