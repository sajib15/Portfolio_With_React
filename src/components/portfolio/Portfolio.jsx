import React from "react";
import image from "../../assets/Emotion.jpg";
import image1 from "../../assets/Keep.png";
import image3 from "../../assets/wild.jpg";
import image4 from "../../assets/Blog.png";
import ImageE from "../../assets/ImageE.png"
import Todo from "../../assets/Todo.png"
import './portfolio.css';

function Portfolio(){
const data=[{
  id:1,
  image:ImageE,
  title:"E-commerce",
  github:"https://github.com/sajib15/E-commerce",
  demo:"https://calm-salamander-8889b7.netlify.app/"
},{
  id:2,
  image:image1,
  title:"Keeper Note",
  github:"https://github.com/sajib15/Keeper-Note",
  demo:"https://playful-jelly-853ae9.netlify.app/"
},
{
  id:3,
  image:image4,
  title:"Blog Post",
  github:"https://github.com/sajib15/Blog-Post",
  demo:"https://fast-island-06827.herokuapp.com/"
},
{
  id:4,
  image:Todo,
  title:"ToDO List",
  github:"https://github.com/sajib15/todolist",
  demo:"https://immense-atoll-78125.herokuapp.com/"
},
{
  id:5,
  image:image,
  title:"Emotion Detetion",
  github:"https://github.com/sajib15/Emotion_analysis_from_text-NRCLex",
  demo:"https://github.com/sajib15/Emotion_analysis_from_text-NRCLex"
},
{
  id:6,
  image:image3,
  title:"Wild Life Detection",
  github:"https://github.com/sajib15/wildlife-animal-detection",
  demo:"https://github.com/sajib15/wildlife-animal-detection"
}]




return <section id="portfolio">
<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className="container portfolio_container">
{data.map((data) => {
  return <article className="portfolio_item">
  <div className="portfolio_item-image">
  <img src={data.image} alt="project"/>
  </div>
  <h3>{data.title}</h3>
  <div className="portfolio_item-cta">
  <a href={data.github} className="btn" target="_blank">GitHub</a>
  <a href={data.demo} className="btn btn-primary" target="_blank">Live Demo</a>
  </div>
  </article>
})}

</div>


</section>


}
export default Portfolio;
