import React from "react";
import {Link} from "react-router-dom";

class Score extends React.Component {
    constructor(props){
        super(props);
        this.state = {score: 0}

        this.addScore = this.addScore.bind(this);
        this.resetScore = this.resetScore.bind(this);
    }

    addScore() {
        this.setState({score: this.state.score + 1})
    }

    resetScore() {
        this.setState({score: 0})
    }

    render() {
    return (
        <div>
        <Link to="/">Home</Link>
        <h1>{this.state.score}</h1>
        <button onClick={this.addScore}>+</button>
        <button onClick={this.resetScore}>Reset</button>
        </div>
    )
    }
}

export default Score;