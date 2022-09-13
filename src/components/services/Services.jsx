import React from "react";
import {BiCheck} from "react-icons/bi";
import "./services.css";

function Services(){
  return <section id="services">
 <h5>What I offer</h5>
 <h2>Services</h2>

<div className="container service_container">
<article className="service">
<div className="service_head">
<h3>Web development</h3>
</div>
<ul className="service_list">
<li >
<BiCheck className="service_list-icon"/>
<p>Front-end design with React</p>
</li>

<li >
<BiCheck className="service_list-icon"/>
<p>Fetch data from Api in Website</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Design a REST API</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Backend connect with Node.js</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Connect With MongoDB</p>
</li>
</ul>
</article>

<article className="service">
<div className="service_head">
<h3>Research & Development</h3>
</div>
<ul className="service_list">
<li >
<BiCheck className="service_list-icon"/>
<p>Finding Paper and online source.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Refine ideas</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Applied Research.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Data optimization</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Development.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Writing Paper</p>
</li>

</ul>
</article>
<article className="service">
<div className="service_head">
<h3>Cyber Security</h3>
</div>
<ul className="service_list">
<li >
<BiCheck className="service_list-icon"/>
<p>Web penetration testing.</p>
</li>

<li >
<BiCheck className="service_list-icon"/>
<p>Computer forensics.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Brute-force attack.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>password cracking.</p>
</li>
<li >
<BiCheck className="service_list-icon"/>
<p>Report Writing</p>
</li>

</ul>
</article>
</div>

  </section>
}
export default Services;
