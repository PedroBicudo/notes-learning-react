import React from 'react';
import "./Counter.css";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <h1 className="counter__title">Counter</h1>

                <div className="counter__content">
                    <span class="counter__number">{this.state.number}</span>
                    <button onClick={this.handleClick} className="counter__btn">Count one More</button>
                </div>
            </div>
        );
    }

    handleClick() {
        this.setState((state, props) => {
            return {number: state.number+1}
        });
    }

}


export default Counter;