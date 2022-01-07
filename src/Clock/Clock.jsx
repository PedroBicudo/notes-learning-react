import React from "react";

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), number: 1};
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.setState(
                    (state, props) => {
                        return {date: new Date()};
                    }
                )
            },
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        return (
            <p>It's {this.state.date.toLocaleTimeString()}</p>
        );
    }

}



export default Clock;