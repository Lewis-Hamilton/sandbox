import React from "react";
import {Link} from "react-router-dom";

function ObjectPage() {
    const women = {
        name: "Nancy",
        age: 24
    }

    console.log(women.name + " is " + women.age);
    return (
        <Link to="/">Home</Link>
    )
}

export default ObjectPage;