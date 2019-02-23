import React, { Component } from 'react';
import './Clock.css';

function convertTimestampToJSON(timestamp) {
    const date = new Date(timestamp);
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

class Clock extends Component {
    constructor(params) {
        super(params);
        this.state = {
            hours: null,
            minutes: null,
            seconds: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.currentTime !== nextProps.currentTime) {
            this.setState(convertTimestampToJSON(nextProps.currentTime))
        }
    }

    render() {
        return (
            <div className="clock">
                <span className="clock__hours">{ this.state.hours }</span>
                <span className="clock__separator">:</span>
                <span className="clock__minutes">{ this.state.minutes }</span>
                <span className="clock__separator">:</span>
                <span className="clock__seconds">{ this.state.seconds }</span>
            </div>
        );
    }
}

export default Clock;
