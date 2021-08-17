import React from "react";
import {Link} from "react-router-dom";

class Friday extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startYear: '',
            endYear: ''
        }
        this.startChange = this.startChange.bind(this);
        this.endChange = this.endChange.bind(this);
        this.fridayTheThirteenths = this.fridayTheThirteenths.bind(this);
    }

    startChange(event) {
        this.setState({startYear: event.target.value});
    }

    endChange(event) {
        this.setState({endYear: event.target.value});
    }

    fridayTheThirteenths() {
        var startYear = new Date(this.state.startYear,0,1)
        var endYear = new Date(this.state.endYear,11,31)
        console.log(startYear + ' ' + endYear)
    }
    
    render() {
    return(
        <div>
        <Link to="/">Home</Link>
        <a href="https://www.codewars.com/kata/540954232a3259755d000039/javascript">Challenge info</a>
        <h1>Friday the 13th Calculator</h1>
        <h2>Please enter your start and end years below:</h2>
        <h3>Start Year</h3>
        <input id="start" value={this.state.startYear} onChange={this.startChange}></input>
        <h3>End Year</h3>
        <input id="end" value={this.state.endYear} onChange={this.endChange}></input>
        <button onClick={this.fridayTheThirteenths}>Calculate</button>
        </div>
    )
    }
}

export default Friday;