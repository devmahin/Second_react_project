import { useEffect, useState } from "react";
import Friend from "./friend";
import './users.css'

export default function Users(){
    let [users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>   setUsers(data))
    }, [])

    return (
        <div className="box">
            <h1>Users : {users.length}</h1>
            {
                users.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}