import React from "react";
import {Link} from "react-router-dom";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {money: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.calculateMoney = this.calculateMoney.bind(this);
      }
    
      handleChange(event) {
        this.setState({money: event.target.value});
      }

    calculateMoney() {
        console.log(this.state.money/2)
      }
    
      render() {
        return (
            <div>
            <Link to="/">Home</Link>
              <input type="text" value={this.state.money} onChange={this.handleChange} />
            <button onClick={this.calculateMoney}>Calculate</button>
          </div>
        )
    }
}

export default Input;