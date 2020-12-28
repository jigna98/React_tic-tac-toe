import React from "react";
import {Link } from "react-router-dom";
import './index.css';
import X from '../X.svg';
import O from '../O.svg';
const UsersPage = () => {

    return(
        <div class="container1">
            <div class="child1">
                <h2 class="h2">Pick your side</h2><br></br><br></br>  
                <img src={X}   width="170" alt="logo" />
                <img src={O}  width="170" alt="logo" /><br></br>
                <input type="radio" class="radio_input" name="radiobutton" value="X"/><br></br>
                <input type="radio" class="radio_input1" name="radiobutton" value="O"/><br></br>
                <div class="center1"> <Link to="./component/Bord"><button  className="button" >Continue</button></Link></div>
            </div>
        </div>

    );
};

export default UsersPage;