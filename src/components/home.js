import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Home = () => {
    return (
        <Router>
            <ol>
                <li><Link to="/Function">Function</Link></li>
                {/* <li><a href="./friday.js">Friday</a></li>
                <li><a href="./input.js">Input</a></li>
                <li><a href="./object.js">Object</a></li>
                <li><a href="./score.js">Score</a></li>
                <li><a href="./color.js">Color</a></li> */}
            </ol>
        </Router>
    )
}

export default Home;