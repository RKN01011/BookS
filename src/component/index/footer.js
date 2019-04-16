import React from 'react';

const footer = () => {
    return(
<footer>
    <p>Stay Tuned for New Releases</p>
    <form>
        <input type="email" name="emailFooter" placeholder="Email"/>
        <input type="submit" value=" Subscribe "/>
    </form>
    <div className="divLink">
    <a href="https://www.facebook.com/"><img src={require("../../img/facebook.svg")} alt="Facebook"/></a>
    <a href="https://www.facebook.com/"><img src={require("../../img/instagram-icon.svg")} alt="Facebook"/></a>
    <a href="https://www.facebook.com/"><img src={require("../../img/pinterest.svg")} alt="Facebook"/></a>
    </div>
    <p>Copyright © 2019 Ucraft | All rights reserved.</p>
</footer>
        )
    }
export default footer;