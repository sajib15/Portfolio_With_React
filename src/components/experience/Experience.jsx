import React from "react";
import {BsPatchCheckFill} from "react-icons/bs";
import "./experience.css";

function Experience(){
  return <section id="experience">

   <h5>What Skils I have</h5>
   <h2>My Experience</h2>
<div className="container experience_container">

<div className="experience_frontend">
<h3>Frontend Development</h3>
<div className="experience_content">

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>HTML</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>CSS</h4>
<small className="text-light">Intermediate</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Javascript</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>EJS</h4>
<small className="text-light">Experienced</small>
</div>
</article>
<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>JQuery</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Bootstrap</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>React</h4>
<small className="text-light">Experienced</small>
</div>
</article>
</div>
</div>

<div className="experience_backend">
<h3>Backend Development</h3>
<div className="experience_content">

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Node.js</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Express.js</h4>
<small className="text-light">Intermediate</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>REST API</h4>
<small className="text-light">Experienced</small>
</div>
</article>


<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>MongoDB</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Mongoose</h4>
<small className="text-light">Experienced</small>
</div>
</article>

<article className="experience_details">
<BsPatchCheckFill className="experience_detailes-icon"/>
<div>
<h4>Python</h4>
<small className="text-light">Experienced</small>
</div>
</article>
</div>

</div>
</div>

  </section>
}
export default Experience;
