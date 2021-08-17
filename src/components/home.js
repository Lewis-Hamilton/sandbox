import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (

            <ol>
                <li><Link to="/function">Function</Link></li>
                <li><Link to="/friday">Friday</Link></li>
                <li><Link to="/input">Input</Link></li>
                {/* <li><a href="./object.js">Object</a></li>
                <li><a href="./score.js">Score</a></li>
                <li><a href="./color.js">Color</a></li> */}
            </ol>

    )
}

export default Home;