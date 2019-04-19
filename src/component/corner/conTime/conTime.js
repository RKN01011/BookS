import React from "react";
import {Link} from "react-router-dom";

const ConTime = () => {
    return (
<div className="corner conTime">
        <div className="pictha"/>
        <div className="corDiv"><Link to="/" className="linkh">So Many Books, So Little Time</Link>
        <p>Five Basic Tips on How To Make Time For Reading</p>
        <Link to="/corner/conTime" className="linkb" onClick={()=>window.scrollTo(0,0)}>READ MORE</Link></div>

</div>
    )
}

export default ConTime;