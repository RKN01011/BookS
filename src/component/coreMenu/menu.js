import React from 'react';
import {Link} from "react-router-dom";
import "./menu.scss"
import {visable} from "./indexNav"

const Menu = () => {
    return(
<section id="menu" style={{transform: "translate(100vw)"}}>	
<div className="rowCloseButton">
    <div onClick={visable}></div>
</div>
<div className="coreMenu">

    <Link to="/" onClick={()=>window.scrollTo(0,0)}>HOME</Link>
    <Link to="/store" onClick={()=>window.scrollTo(0,0)}>SHOP</Link>
    <Link to="/corner" onClick={()=>window.scrollTo(0,0)}>READERS CORNER</Link>
    <Link to="/about" onClick={()=>window.scrollTo(0,0)}>ABOUT US</Link>
    <Link to="/countac" onClick={()=>window.scrollTo(0,0)}>CONTACT US</Link>
</div>

</section>
        )
    }
export default Menu;