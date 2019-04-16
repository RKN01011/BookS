import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import IndexTop from "./component/index";
import Menu from "./component/coreMenu/menu";
import Store from "./component/store/indexStore";
import SuperBook from "./component/store/appBook/superBook";
import Corner from "./component/corner/index";
import ConCool from "./component/corner/conCool";
import ConKafka from "./component/corner/conKafka";
import ConTime from "./component/corner/conTime";
import About from "./component/aboutUs"
import countac from "./component/countactUs";



export default class castomRouter extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
            <Route exact path="/" component={IndexTop}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/store" component={Store}/>
            <Route exact path="/store/superBook" component={SuperBook}/>
            <Route exact path="/corner" component={Corner}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/countac" component={countac}/>
            <Route exact path="/corner/concool" component={ConCool}/>
            <Route exact path="/corner/conKafka" component={ConKafka}/>
            <Route exact path="/corner/conTime" component={ConTime}/>
            </Switch>
        </Router>
        )
    }

}