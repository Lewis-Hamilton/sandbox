import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (

            <ol>
                <li><Link to="/function">Function</Link></li>
                <li><Link to="/friday">Friday</Link></li>
                <li><Link to="/input">Input</Link></li>
                <li><Link to="/object">Object</Link></li>
                <li><Link to="/score">Score</Link></li>
                <li><Link to="/color">Color</Link></li>
            </ol>

    )
}

export default Home;