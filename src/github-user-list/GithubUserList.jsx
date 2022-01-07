import React from "react";
import GithubUserItem from "./github-user-item/GithubUserItem";
import GithubService from "./service/GithubService";

class GithubUserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

    }

    componentDidMount() {
        let service = new GithubService();
        service.getUsers()
            .then(json => {
                this.updateUsers(json);
            })
            .catch(error => {
                console.error(error);
            })
    }

    updateUsers(users) {
        this.setState({
            users
        })
    }

    render() {
        return (
            <ul className="user-list">
                {this.state.users.map(user =>
                    <GithubUserItem key={user.id} user={user}/>
                )}
            </ul>
        );
    }
}

export default GithubUserList;