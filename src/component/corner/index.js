import React from "react";
import Nav from "../coreMenu/indexNav";
import Footer from "../index/footer";
import Menu from "../coreMenu/menu";
import Basket from '../store/basket';
import "./corner.scss";
import ConCool from "./conCool/conCool";
import ConKafka from "./conKafka/conKafka";
import ConTime from "./conTime/conTime";

const corner = () => {
    return(
        <section id="corner">
        <Basket />
        <Nav />
        <Menu />
        <div className="head">
        <h4>READERS CORNER</h4>
        </div>
        <div className="cornerChose">
        <ConKafka />
        <ConTime />
        <ConCool />
        </div>
        <Footer />
        </section>
    )
}
export default corner;