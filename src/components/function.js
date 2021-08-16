import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";


const Function = () => {
    return (
<Link to="/">Home</Link>
    )

    function myFunction(name, age) {
        return alert(name + ' is ' + age + ' years old.');
    }

    function myArray(number) {
        var newArray = [];
        var i = 0;

        for(i = 1; i <= number; i++){
        newArray.push(i);
        }

        return newArray;
    }
    console.log(myArray(69));
}

export default Function;