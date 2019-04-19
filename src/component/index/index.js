import React, { Component } from 'react';
import './App.scss';
import Nav from "../coreMenu/indexNav";
import IndexTop from "./indexTop";
import IndexNameText from "./indexNameText"
import IndexNameText1 from "./indexNameText1"
import IndexNameText2 from "./indexNameText2"
import IndexNameText3 from "./indexNameText3"
import Footer from "./footer"
import Menu from "../coreMenu/menu"
import Basket from '../store/basket';
import {connect} from "react-redux"
import  {getAll, getAllFantasy, getAllNovels, getAllClassics, getAllModern}  from '../action/store.action';

window.onscroll = function() {
  let an = document.getElementsByClassName("an");
  let anim = document.getElementsByClassName("anim");
  if (an[0] === undefined) { }
  else if (an[0].getBoundingClientRect().top < -180) {
    anim[0].className = "anim classVisa";
  }
}

class IndexApp extends Component {
  constructor(){
    super()
    this.state= {

    }
  }
  
    render() {
      return (
        <div id="coreIndex" onClick={this.change}>
        <div id="backFon"></div>
        <Basket />
        <Nav />
        <Menu />
        <IndexTop />
        <section id="mainIndex">
            <IndexNameText />
            <IndexNameText1 />
        </section>
            <IndexNameText2 getF={this.props.getallfant} getC={this.props.getclas} getN={this.props.getallnov} getM={this.props.getallmod}/>
            <IndexNameText3 />
            <Footer />
       
        </div>
      );
    }
  }
  
  export default connect(
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
        }
        }
  ) (IndexApp);