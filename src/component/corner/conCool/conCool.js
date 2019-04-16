import React from "react";
import {Link} from "react-router-dom";


const ConCool = () => {
    return (
<div className="corner conCool">
        <div className="pictha" />
        <div className="corDiv"><Link to="/" className="linkh">Why Reading Is Cool?</Link>
        <p>The New Hype in Town!</p>
        <Link to="/corner/concool" className="linkb">READ MORE</Link></div>
        

</div>
    )
}

export default ConCool;