import React, {useState} from "react";

export default {
    title: 'React.memo '
}

const NewMessageCounter = (props : { count: number} ) => {
    console.log('NewMessageCounter')
    return <div>{props.count}</div>
}

const UsersSecret = (props : { users: Array<string>} ) => {
    console.log('Users')
    return <div>
        {props.users.map((u,i)=> <div key={i}>{u}</div>)
        }</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log('Example1')
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Andrew', 'Kate', 'Matvei'])

    const addUser = () => {
        const newUsers = [...users, 'Anatoliy' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}