import React from "react";

// jsx 문법에서는 html 태그를 사용 시 반드시 시작태그와 끝태그가 존재해야함
// js에서는 끝태그만 있거나 시작태그만 있어도 인식되지만
// jsx는 xml이 합쳐진 형태이기 때문에 시작태그 끝태그를 모두 넣어줘야한다.
// 참고. xml는 시작태그 끝태그 모두 필요로 한다.
// <img> → <img></img>, <img/>
/**
 * 
 * @param {*} props 
 * @returns 
 */
function Friends(props) {

    // const name = props.name
    // const gender = props.gender
    // const email = props.email
    
    const { name, gender, email } = props
    return (
        <div>
            <table border = "1" className = "table table-hover mt-3">
                <tr><th>Name</th><th>Gender</th><th>E-mail</th></tr>
                <tr><td>{name}</td><td>{gender}</td><td>{email}</td></tr>
            </table>
        </div>
    );
    
}

export default Friends;