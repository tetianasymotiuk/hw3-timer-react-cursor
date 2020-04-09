import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
    state = {
        count: Math.round(this.props.time / 60),
        autostart: true,
        width: 100,
        change: (100 / Math.round(this.props.time / 60)).toFixed(4)
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.autostart) {
                if (this.state.count !== 0) {
                    this.startTimer();
                    this.changeCount();
                    this.changeWidth();
                }
            } else {
                this.stopTimer();
            }
        }, 1000);
    }

    startTimer = () => {
        this.setState({
            autostart: true
        });
    }

    stopTimer = () => {
        this.setState({
            autostart: false,
            count: this.state.count
        });
    }

    changeCount = () => {
        this.setState({ 
            count: this.state.count - this.props.step
        })
    }

    changeWidth = () => {
        this.setState({
            width: (this.state.width - this.state.change * this.props.step)
        })
    }

    render() {
        return (
            <div className='container'>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <p className='seconds'>{this.state.count} seconds.</p> 
                <p className='row' style={{ width: this.state.width + '%' }} ></p>
            </div>
        )
    }
}

export default Timer;




