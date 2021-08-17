import React from "react";
import {Link} from "react-router-dom";

class Friday extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startYear: '',
            endYear: ''
        }
        this.fridayTheThirteenths = this.fridayTheThirteenths.bind(this);
    }

    fridayTheThirteenths() {
        console.log(this.state.startYear + this.state.endYear)
    }

    test() {
        console.log("test")
    }
    
    render() {
    return(
        <div>
        <Link to="/">Home</Link>
        <a href="https://www.codewars.com/kata/540954232a3259755d000039/javascript">Challenge info</a>
        <h1>Friday the 13th Calculator</h1>
        <h2>Please enter your start and end years below:</h2>
        <h3>Start Year</h3>
        <input id="start" value={this.state.startYear}></input>
        <h3>End Year</h3>
        <input id="end" value={this.state.endYear}></input>
        <button onClick={this.fridayTheThirteenths}>Calculate</button>
        <button onClick={this.test}>test</button>

        </div>
    )
    }
}

export default Friday;