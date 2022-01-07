import React from "react";

class MessageAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };

        this.handleUpdateMessages = this.handleUpdateMessages.bind(this);
    }

    componentDidMount() {
        this.updateMessages();
    }

    render() {
        return (
            <div>
                <p>Olá Usuário</p>
                {this.state.messages.length > 0 &&
                    <p>Você tem {this.state.messages.length} não lidas</p>
                }
                <button onClick={this.handleUpdateMessages}>Atualizar Mensagens</button>
            </div>
        );
    }

    handleUpdateMessages() {
        this.updateMessages();
    }

    updateMessages() {
        let total = this._getRandomNumber();
        let messages = []
        for (let i = 0; i < total; i++) {
            messages.push("");
        }   

        this.setState({
            messages
        });
    }

    _getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
}

export default MessageAlert;