import React from "react";
import {Link} from "react-router-dom";


const ConKafka = () => {
    return (
<div className="corner conKafka">
        <div className="pictha"/>
        <div className="corDiv"><Link to="/" className="linkh">Kafka on the Shore</Link>
        <p>The Book Title That Created So Much Buzz!</p>
        <Link to="/corner/conKafka" className="linkb">READ MORE</Link></div>
        

</div>
    )
}

export default ConKafka;