import React from 'react';
import {Link} from "react-router-dom";

function indexNameText2 (props){
    return(
<div className="mainName">
<div className="mainName1">
<h2>TOP CATEGORIES</h2>
</div>
<div className="TopCategoriesMain">
<Link className="genre" to="/store" onClick={props.getC} onMouseUp={()=>window.scrollTo(0,0)}><img src={require("../../img/classic.png")} alt="genre"/></Link>
<Link className="genre" to="/store" onClick={props.getM} onMouseUp={()=>window.scrollTo(0,0)}><img src={require("../../img/modern.png")} alt="genre"/></Link>
<Link className="genre" to="/store" onClick={props.getN} onMouseUp={()=>window.scrollTo(0,0)}><img src={require("../../img/novel.png")} alt="genre"/></Link>
<Link className="genre" to="/store" onClick={props.getF} onMouseUp={()=>window.scrollTo(0,0)}><img src={require("../../img/scifi.png")} alt="genre"/></Link>
</div>
</div>
)
}
export default indexNameText2;