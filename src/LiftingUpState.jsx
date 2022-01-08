import React from "react";

export default class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        
        this.onChangeChild = this.onChangeChild.bind(this);
        this.childNumbers = []
        for (let i=1; i <= 10; i++) {
            this.childNumbers.push(i);
        }

    }

    render() {
        let childs = this.childNumbers.map((number, index) => {
            return <Child key={index} onChangeChild={this.onChangeChild} childNumber={number} text={this.state.text} />
        });

        return (
            <fieldset>
                <legend>Father Component</legend>

                {childs}
                
                <fieldset>
                    <legend>Text State</legend>
                    <span>Value: {this.state.text}</span>
                </fieldset>
            
            </fieldset>
        );
    }

    onChangeChild(event) {
        this.setState({
            text: event.target.value
        });
    }
}


function Child(props) {
    return (
        <fieldset>
            <legend>Child Component - {props.childNumber}</legend>
            <input type="text" onChange={props.onChangeChild} value={props.text} />
        </fieldset>

    );
}