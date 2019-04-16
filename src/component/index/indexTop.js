import React, { Component } from 'react';
import {Link} from "react-router-dom"



class IndexTop extends Component {
  render() {
    return (
      <div className="App">
      <div className="appText">
      <h1>ESCAPE INTO A BOOK</h1>
      <p>People say that you can’t buy happiness: but you can buy books and that’s kind of the same thing!<br />
         Dive into our magic world of books to find the one that is close to your heart.</p>
      <Link className="bottonText" to="/store">GO TO SHOP</Link>   
      </div>
      </div>
    );
  }
}

export default IndexTop;
