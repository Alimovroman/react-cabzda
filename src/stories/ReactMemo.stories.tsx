import React, {useState} from "react";

export default {
    title: 'ReactMemoDemo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div> )}
    </div>
}
const Users = React.memo(UsersSecret)

export const example1 = () => {
    console.log('Example')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState(['user1', 'user2', 'user3', 'user4'])

    const addUsers = () => {
        const newUsers = [...users, `sveta ${new Date().getTime()}`]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUsers}>add users</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users} />
        </div>
    )
}