import React from 'react';

function indexNameText (props) {
    function book  () {

        let book = props.inStore;
        return book.map( el => {
          return( 
            
          <div className="bookBlock" key={el.name}>
          <div className="b">
          <img src={el.src} alt=""/>
          <label className="addCard" htmlFor={el.name} onClick={ () => props.set_book(el.name, el.price, el.src, 1)}>ADD CARD</label>
          </div>
          
          <h4>{el.name}</h4>
          <p>$ {el.price}</p>
          
          </div>)
        })
        }
return(
<div className="anim">
<div className="mainName1">
<h2>BESTSELLERS</h2>
</div>
<div className="mainName2"> 
    {book()}
</div>
</div>

)

}

export default indexNameText;