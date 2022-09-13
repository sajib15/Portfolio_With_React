import React ,{useState} from "react";
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import   {BiBook} from "react-icons/bi";
import   {RiServiceLine} from "react-icons/ri";
import   {TiContacts} from "react-icons/ti";
import './nav.css';




function Nav(){

const [activeNav, SetActiveNav]=useState("#");



  return <nav>
  <a href="#" onClick={()=>SetActiveNav("#")}className={activeNav ==="#" ? "active" :" "}> <AiOutlineHome/></a>
  <a href="#about" onClick={()=>SetActiveNav("#about")} className={activeNav ==="#about" ? "active" :" "} > <AiOutlineUser/></a>
  <a href="#experience" onClick={()=>SetActiveNav("#experience")} className={activeNav ==="#experience" ? "active" :" "}> <BiBook/></a>
  <a href="#services" onClick={()=>SetActiveNav("#services")} className={activeNav ==="#services" ? "active" :" "}> <RiServiceLine/></a>
  <a href="#contact" onClick={()=>SetActiveNav("#contact")} className={activeNav ==="#contact" ? "active" :" "}> <TiContacts/></a>
  </nav>

}
export default Nav;
