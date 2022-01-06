import "bootstrap/dist/css/bootstrap.min.css";
import "./UserCard.css";

function UserCard() {
    return (
        <div className="card bg-dark border-teste">
            <div className="card-body">
                <h2 className="card-title">Hello World</h2>
                <p className="card-text">A little bit of card here.</p>
            </div>
        </div>
    );
}   

export default UserCard;