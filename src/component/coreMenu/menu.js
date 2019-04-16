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

    <Link to="/">HOME</Link>
    <Link to="/store">SHOP</Link>
    <Link to="/corner">READERS CORNER</Link>
    <Link to="/about">ABOUT US</Link>
    <Link to="/countac">CONTACT US</Link>
</div>

</section>
        )
    }
export default Menu;