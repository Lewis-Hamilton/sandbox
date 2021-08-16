import React from "react";

function Test(props) {
    console.log("hello world")
    var newArray = [];
    var i;

    for(i = 1; i<= props.number; i++){
        newArray.push(i);
    }

    return (<p>{newArray}</p>);

}

export default Test;