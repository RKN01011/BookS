import React,{Component} from 'react';
import { visableBasket } from '../coreMenu/indexNav';
import {connect} from "react-redux"

var arrPrice = [0];

class Basket extends Component {
constructor(props){
  super(props)
  this.state = {
    value: 1,
    choose: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
  }
}
  func (){
    let pr = [];
    let arr = this.props.basket[0];
  for (let i = 0; i < arr.length; i++) {
  pr.push(arr[i].price)
  }
  return arrPrice = pr;
  }
    render() {
    return(
<div id="basketCore" style={{display: "none"}}>
{console.log(this.props.basket[0])}
<div className="basket">

<div className="closeDiv" onClick={visableBasket} />
<div className="basketLeft basketDiv">
<h4>Shopping cart</h4>
<div className="basketTable">
<div>
{ this.props.basket[0].map( (el) => {
    this.func()
    return ( 
    <div className="miniBlock" key={el.name}>
    <img src={el.img} alt=""/>
    <div>
      <select name="quantity" id="cheked">
    <option defaultValue value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
      </select>
    <p>{el.name}</p>
    <p>$ {el.price * this.state.value}</p>
    </div>
    </div> )
  }) }
  </div>
  </div>
<div className="price">
<span>TOTAL</span>
<span>$ { arrPrice.reduce( (i, price) => {
  return i + price;
 })}</span>
</div>
</div>
<div className="basketRight basketDiv">
<div>
<h4>Checkout</h4>
<p>Enter your email address. This address will be used to send you order status updates.</p>
<input type="email" name="formBasket" />
<div>
<input type="checkbox" name="formBasket" id="checkboxBasket"/><label htmlFor="checkboxBasket">Keep me up to date on news and exclusive offers</label>
</div>
<div className="basketRButton">Checkout</div>
<div className="basketStep">
<h4>Next steps</h4>
<p> <span>Payment information</span> <br />
Choose a payment method and enter your payment details.</p>
<p><span>Order confirmation</span> <br />
Place your order and receive a confirmation email.</p>
</div>
</div>
</div>
</div>
</div>
)
    }
}

export default connect (
    (store)=>{
        return {
          basket: store.basket
        }
          },
) (Basket);