import React from "react";

const Function = () => {
    return (
        <a href="./home.js">Home</a>
    )

    function myFunction(name, age) {
        return alert(name + ' is ' + age + ' years old.');
    }

    function myArray(number) {
        newArray = [];

        for(i = 1; i <= number; i++){
        newArray.push(i);
        }

        return newArray;
    }
    console.log(myArray(69));
}

export default Function;