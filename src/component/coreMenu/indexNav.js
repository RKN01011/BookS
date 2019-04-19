import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";



export function visable () {
  var menu = document.getElementById("menu");
  if (menu.style.transform === "translate(100vw)") {
    menu.style.transform = "translate(0vw)"
  }
  else {
    menu.style.transform = "translate(100vw)"
  }
}
export function visableBasket () {
  var basket = document.getElementById("basketCore");
  if (basket.style.display === "none") {
    basket.style.display = "flex"
  }
  else {
    basket.style.display = "none"
  }
}

class Nav extends Component {
  render(){
  return(
    <nav id="navIndex">
      <Link to="/" onClick={()=>window.scrollTo(0,0)} className="logoLink">
      <img src={require("../../img/logo.png")} alt="logo"></img>
      </Link>
      <div className="menuLink">
      <div className="shopLink" onClick={ visableBasket }> 
      <div className="store">{this.props.base[0].length}</div>
      </div>
      <div className="miniMenuLink" onClick={visable} >
      <div className="menuline"/>
      </div>
      </div>
    </nav> )
  }
}

export default connect (
  (store)=>{
    return {
      base: store.basket
    }
      }
) (Nav);