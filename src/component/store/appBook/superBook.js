import React from 'react';

function superBook(img, name){
    return(
<div id="superBook">
<div className="Book">
<img src={img} alt=""/>
<h4>{name}</h4>
<p>$ 9.99</p>
<div className="testblock"></div>
<div className="addCard">ADD TO CART</div>
</div>
<div className="bookText">
<p>:)</p>
</div>
</div>
    )
}

export default superBook;