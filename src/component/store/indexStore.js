import React, { Component } from 'react';
import "./store.scss";
import Nav from "../coreMenu/indexNav";
import Footer from "../index/footer";
import {connect} from "react-redux"
import  {getAll, getAllBest, getAllFantasy, getAllNovels, getAllClassics, getAllModern}  from '../action/store.action';
import { set_book }  from '../action/basket.action';
import Menu from "../coreMenu/menu"
import Basket from './basket';

export var book_chose = [];

class IndexStore extends Component {


book = () => {

let book = this.props.base;
return book.map( el => {
  return( 
    
  <div className="BOOK" key={el.name}>
  <div className="bookimg">
  <label className="addBook" htmlFor={el.name} onClick={ () => this.props.set_book(el.name, el.price, el.src, 1)}>ADD CARD</label>
  <img src={el.src} alt=""/>
  </div>
  <div className="booktext">
  <h3>{el.name}</h3>
  <p>$ {el.price}</p>
  </div>
  </div>)
})

  }
    render() {
      return (
        <React.Fragment>
<Basket />
<Nav />
<Menu />
<section id="storeList">

<input name="chose" type="radio" id="n_ALL"/>
<input name="chose" type="radio" id="n_BESTSELLER"/>
<input name="chose" type="radio" id="n_FANTASY"/>
<input name="chose" type="radio" id="n_NOVELS"/>
<input name="chose" type="radio" id="n_CLASSICS"/>
<input name="chose" type="radio" id="n_MODERN"/>

<div id="bookmenu">
<label onClick={this.props.getAll} htmlFor="n_ALL" id="in_ALL">ALL</label>
<label onClick={this.props.getallbest} htmlFor="n_BESTSELLER" id="in_BESTSELLER">BESTSELLER</label>
<label onClick={this.props.getallfant} htmlFor="n_FANTASY" id="in_FANTASY">SCI-FI & FANTASY</label>
<label onClick={this.props.getallnov} htmlFor="n_NOVELS" id="in_NOVELS">NOVELS</label>
<label onClick={this.props.getclas} htmlFor="n_CLASSICS" id="in_CLASSICS">CLASSICS</label>
<label onClick={this.props.getallmod} htmlFor="n_MODERN" id="in_MODERN">MODERN</label>
</div>
<div id="booklist">
{ this.book() } 
</div>
<Footer />    
</section>
</React.Fragment>
      );
    }
  }
  
  export default  connect(
    (store)=>{
  return {
    base: store.store
  }
    },
    (dispatch)=>{
        return{
          getAll: async ()=>{
            const action = await getAll();
            dispatch(action);
          },
          getallbest: async ()=>{
            const action = await getAllBest();
            dispatch(action);
          },
          getallfant: async ()=>{
            const action = await getAllFantasy();
            dispatch(action);
          },
          getallnov: async ()=>{
            const action = await getAllNovels();
            dispatch(action);
          },
          getclas: async ()=>{
            const action = await getAllClassics();
            dispatch(action);
          },
          getallmod: async ()=>{
            const action = await getAllModern();
            dispatch(action);
          },
          async set_book (name, price, img, quantity){
            const action = await set_book(name, price, img, quantity);
            dispatch(action);
          },
        
        }
        }
  ) (IndexStore);