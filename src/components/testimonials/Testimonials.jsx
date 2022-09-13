import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import "./testimonials.css";
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials(){

const data=[{
  id:1,
  tittle:"John momo",
  image:AVTR1,
  Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam elit. Suspendisse lobortis diam ac pretium molestie. Quisque aliquam dolor mi, in ullamcorper est consequat eu. In maximus ut leo quis congue. Duis vel lacus purus. Mauris nec dolor ipsum. Morbi feugiat urna quis pretium venenatis.Aenean sollicitudin sit amet enim eu laoreet."
},{
  id:1,
  tittle:"John momo",
  image:AVTR1,
  Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam elit. Suspendisse lobortis diam ac pretium molestie. Quisque aliquam dolor mi, in ullamcorper est consequat eu. In maximus ut leo quis congue. Duis vel lacus purus. Mauris nec dolor ipsum. Morbi feugiat urna quis pretium venenatis.Aenean sollicitudin sit amet enim eu laoreet."
},{
  id:1,
  tittle:"John momo",
  image:AVTR1,
  Comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non diam elit. Suspendisse lobortis diam ac pretium molestie. Quisque aliquam dolor mi, in ullamcorper est consequat eu. In maximus ut leo quis congue. Duis vel lacus purus. Mauris nec dolor ipsum. Morbi feugiat urna quis pretium venenatis.Aenean sollicitudin sit amet enim eu laoreet."
}]


  return (<section id="testimonials">
<h5>Review from clients</h5>
<h2>Testimonials</h2>
<Swiper className="container testimonials_container"
modules={[Autoplay,Pagination]}
centeredSlides={true}
loop={true}
autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
{data.map((data)=>
{
return (<SwiperSlide key={data.id}className="testimonial">
  <div className="client_avater">
  <img src={data.image} alt="Avatar 1"/>
  </div>
  <h5 className="client_name">{data.tittle}</h5>
  <small className="client_review"> {data.Comment}</small></SwiperSlide>)
})}

</Swiper>

  </section>
)
}
export default Testimonials;
