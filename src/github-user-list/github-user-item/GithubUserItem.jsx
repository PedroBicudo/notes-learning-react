import "../GithubUserList.css";

function GithubUserItem(props) {
    return (
        <li className="user-item">
            <picture className="user-item__pic">
                <img className="user-item__avatar" src={props.user.avatar_url} alt={props.user.login} width={300}/>
            </picture>
            <p className="user-item__name">{props.user.login}</p>
        </li>
    );
}

export default GithubUserItem;