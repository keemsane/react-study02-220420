import React from "react";

function Friends(props) {
    const name = props.name
    const gender = props.gender
    const email = props.email
    return (
        <div>
            <table border = "1" class = "table table mt-3">
                <tr><th>Name</th><th>Gender</th><th>E-mail</th></tr>
                <tr><td>{name}</td><td>{gender}</td><td>{email}</td></tr>
            </table>
        </div>
    );
    
}

export default Friends;