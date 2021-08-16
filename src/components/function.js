import React from "react";
import {Link} from "react-router-dom";

function newFunction(name, age) {
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

function Function() {
    newFunction("Bill", 69);
    myArray();
    console.log(myArray(69));
    return (
        <Link to="/">Home</Link>
    )

}

export default Function;