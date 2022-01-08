import React from 'react';

class ReactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSaveChangeOnLocalMachine = this.onSaveChangeOnLocalMachine.bind(this);
        this.onClearChangesOnLocalMachine = this.onClearChangesOnLocalMachine.bind(this);
    }

    render() {
        return (
            <form>
                <input type="text" onChange={this.onUsernameChange} value={this.state.username}/>
                <input type="password" onChange={this.onPasswordChange} value={this.state.password}/>
                <input type="submit" onClick={this.onSaveChangeOnLocalMachine} value="Salvar no localStorage"/>
                <input type="reset" onClick={this.onClearChangesOnLocalMachine} value="Limpar o localStorage"/>
            </form>
        );
    }

    componentDidMount() {
        let username = localStorage.getItem("username") || '';
        let password = localStorage.getItem("password") || '';
        
        this.setState({
            username: username,
            password: password
        });
    }

    onSaveChangeOnLocalMachine(event) {
        event.preventDefault();
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        console.info("Dados salvos");
    }
    
    onClearChangesOnLocalMachine(event) {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.setState({
            username: '',
            password: ''
        })
    }

    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });    
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

}

export default ReactForm;