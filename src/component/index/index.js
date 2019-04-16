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


class IndexApp extends Component {
    render() {
      return (
        <div id="coreIndex">
        <div id="backFon"></div>
        <Basket />
        <Nav />
        <Menu />
        <IndexTop />
        <section id="mainIndex">
            <IndexNameText />
            <IndexNameText1 />
        </section>
            <IndexNameText2 />
            <IndexNameText3 />
            <Footer />
       
        </div>
      );
    }
  }
  
  export default IndexApp;