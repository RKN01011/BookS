import React,{Component} from 'react';


class indexNameText1 extends Component {
    constructor(){
        super()
        this.state = {
            number: 0  }
        }
    plus = () => {
        let r = this.state.number;
        r = r + 1;
        if (r > 10){
            r =  10;
        }
        this.setState({number: r})
    }
    neg = () => {
        let r = this.state.number;
        r = r - 1;
        if (r < 0){
            r =  0;
        }
        this.setState({number: r})
    }


        
                
    render() {
return(
    
<div className="mainName an" data-div={1000}>
<div className="mainName1">
<h2>RECOMMENDED THIS WEEK:</h2>
</div>
<div className="mainDiv">

<div className="border">
<img src={require("../../img/winowGirl.jpg")} alt="border"></img>
</div>
<div className="border1">
<h3>A Velocity of Being: 
Letters to A Young Reader
by Maria Popova</h3>
<p>This week, Maria Popova's book is the guest of honor!
In these pages, some of today’s most wonderful culture-makers—writers, artists, scientists, entrepreneurs, and philosophers—reflect on the joys of reading, how books broaden and deepen human experience, and the ways in which the written word has formed their own character. On the page facing each letter, an illustration by a celebrated illustrator or graphic artist presents that artist's visual response.</p>
<div id="buyBook">
<div className="buyImg">
<img src={require("../../img/bookBuy.jpg")} alt="border1"></img>
</div>
<div className="priceBook">
    <h4>A Velocity of Being: Letters to A Young Reader</h4>
    <p>$ 9.99</p>
    <div id="quantity">
    <div className="quantityNumber">{ this.state.number }</div>
    <div id="chose">
    <div className="plus" onClick={this.plus}></div>
    <div className="neg" onClick={this.neg}></div>
    </div>
    </div>
    <div id="addbutton">ADD TO CART</div>
</div>
</div>

</div>
</div>
</div>
)
    }
}

export default indexNameText1;