import React from "react";
import Nav from "../coreMenu/indexNav";
import Footer from "../index/footer";
import Menu from "../coreMenu/menu";
import Basket from '../store/basket';
import "./contact.scss";

const countac = () => {
    
    return(
        <section id="countac">
        <Basket />
        <Nav />
        <Menu />
        <div className="head">
        <h4>CONTACT US</h4>
        </div>
        <div className="conDiv">
        <div className="coreForm">
        <h3>IN CASE YOU WANT TO LEAVE A COMMENT, DROP US AN EMAIL!</h3>
        <form id="formCon">
          <input type="text" name="contactForm" placeholder="Fill in your name"/>
          <input type="email" name="contactForm" placeholder="Email"/>
          <textarea name="contactForm" placeholder="Write a message"/>
          <div>
              <input type="button" name="contactForm" value="Send"/> 
          </div>
          
        </form>
        <div className="textMap">
        <h4>WE'LL BE HAPPY TO TALK, TOO!</h4>
        <p>PHONE: 212-330-7703</p>
        <h4>HERE IS WHERE OUR BOOKS ISLAND IN LOCATED :)</h4>
        </div>
        <div className="MAPA" />
        </div>
        </div>
        <Footer />
        </section>
    )
}
export default countac;