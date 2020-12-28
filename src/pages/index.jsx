import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import X from '../X.svg';
import O from '../O.svg';
const MainPage = () => {

    return(
        <div class ="container"> 
           <div class ="child ">
               <img src={X} width="170" alt="logo" />
               <img src={O} width="170" alt="logo" /><br></br><br></br><br></br><br></br><br></br>
                <h2 class="h1">Choose your play mode</h2><br></br><br></br>
                <div class="center">
                    <Link to="/users"><button className="button">With AI</button></Link><br></br><br></br>
                    <Link to="/users"><button className="button">With a friend</button></Link>
                </div>
            </div>         
        </div>

    );
};

export default MainPage;
