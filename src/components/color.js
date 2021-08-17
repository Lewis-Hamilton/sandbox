import React from "react";
import {Link} from "react-router-dom";

class Color extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text: 'Hello World',
            color: '',
            font: 32
        }
        this.reset = this.reset.bind(this);
        this.colorInput = this.colorInput.bind(this);
        this.colorButton = this.colorButton.bind(this);
        this.fontInput = this.fontInput.bind(this);
        this.fontButton = this.fontButton.bind(this);
    }

    reset() {
        this.setState({
            color: '',
            font: 32
        })
    }

    colorInput(event) {
        this.setState({color: event.target.value})
    }

    colorButton(buttonColor) {
        this.setState({color: buttonColor})
    }

    fontInput(event) {
        this.setState({font: parseInt(event.target.value)})
    }

    fontButton(increment) {
        this.setState({font: this.state.font + increment})
    }

    render() {
        var textStyle = {
            color: this.state.color,
            fontSize: this.state.font
        }
    return (
        <div>
            <Link to="/">Home</Link>
            <p style={textStyle}>{this.state.text}</p>
            <button onClick={this.reset}>Reset</button>

            <p>Enter a color</p>
            <input onChange={this.colorInput}/>
            <p>Or choose a preset:</p>
            <button onClick={() => this.colorButton('red')}>Red</button>
            <button onClick={() => this.colorButton('Green')}>Green</button>
            <button onClick={() => this.colorButton('Blue')}>Blue</button>
            <button onClick={() => this.colorButton('Black')}>Black</button>
            <button onClick={() => this.colorButton('Purple')}>Purple</button>
            <button onClick={() => this.colorButton('Yellow')}>Yellow</button>
            <button onClick={() => this.colorButton('Orange')}>Orange</button>
            <button onClick={() => this.colorButton('Brown')}>Brown</button>

            <p>Enter a font size:</p>
            <input onChange={this.fontInput}/>
            <p>Or use the buttons below</p>
            <button onClick={() => this.fontButton(1)}>+</button>
            <button onClick={() => this.fontButton(-1)}>-</button>
        </div>
    )
    }
}

export default Color;