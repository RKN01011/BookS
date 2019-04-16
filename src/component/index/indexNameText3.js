import React from 'react';

const indexNameText3 = () => {
    return(
<div className="frogFun">
<div className="frog" />
<div className="frogFunForm">
<h2>Didn't find your book?<br />
Request a book and we will deliver it to our store for you! </h2>
<form name="ffrog">
   <input type="text" name="frogForm" maxLength="15" placeholder="Fill in your name"></input>
   <input type="email" name="frogForm" maxLength="15" placeholder="Email"></input> 
   <textarea name="frogForm" maxLength="350" placeholder="Write a message"></textarea> 
   <div>
       <input type="submit" value="SUBMIT"></input>
   </div>
   
</form>
</div>
</div>
        )
    }
export default indexNameText3;