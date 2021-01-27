import React, { Component } from 'react';
import "./index.css";
class Timer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            secondsElapsed: 0
        }
    }
    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="timer"> (Time Elapsed: {this.state.secondsElapsed} seconds)</div>
        );
    }
}
export default Timer;