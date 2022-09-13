import React from "react";
import ME from "../../assets/sajib10.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import './about.css';


function About(){
return <section id="about">
<h5>Get To Know</h5>
<h2>About Me</h2>
<div className="container about_container">

<div className="about_me">
<div className="about_me-image">
<img src={ME} alt="Sajib"/>
</div>
</div>
<div className="about_content">
<div className="about_cards">

<article className="about_card">
<FaAward className="about_icon"/>
<h5>Experience</h5>
<small>1 Year+</small>
</article>

<article className="about_card">
<FiUsers className="about_icon"/>
<h5>Clients</h5>
<small>100+ world wide</small>
</article>

<article className="about_card">
<VscFolderLibrary className="about_icon"/>
<h5>Projects</h5>
<small>10+ completed</small>
</article>
</div>
<p>
Learning new technologies is always exciting. I believe that knowledge is perfected when we use it in practice. My four-year
university journey has made me more enthusiastic about technology.
I am excited to make the leap and continue refining my skills with the right company
</p>
<a href="#contact" className="btn btn-primary">Let's Talk</a>
</div>

</div>
</section>
}
export default About;
