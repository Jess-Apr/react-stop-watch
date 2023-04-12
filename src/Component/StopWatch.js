import React from "react";
import "../CSS/StopWatch.css";

export default class StopWatch extends React.Component {
    constructor() {
        super();

        this.state = {
            currentTime: 10,
            currentTimeStr: "00:00:00.00",
            isStarted: false,
        };

    }
    clickStart() {
        this.setState({ isStarted: true }, () => {this.startTimer()});
    }

    startTimer() {
        this.stopTimer();

        this.tick = setInterval(() => {
            this.setState({
                currentTime: this.state.currentTime + 10,
            }, () => {
                this.setState({currentTimeStr: new Date(this.state.currentTime).toISOString().substring(11, 22)
            })})
        }, 10);
    }

    stopTimer() {
        clearInterval(this.tick);
        this.setState({ isStarted: false });
    }

    render() {
        return (
            <div className="stop-watch">
                <div className="stop-watch-time">{this.state.currentTimeStr}</div>
                <div className="stop-watch-btn">
                  <button 
                    className="start-btn"
                    onClick={() => this.clickStart()}
                  >Start</button>
                  <button onClick={() => this.stopTimer()}>Stop</button>
                </div>
            </div>
        )
    }
}