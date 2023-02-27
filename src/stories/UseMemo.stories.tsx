import React, {FC, useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample: FC = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let result1 = 1
    let result2 = 1

    result1 = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++ ) {
            let fake = 0
            while( fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult *= i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++ ) {
        result2 *= i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result A: {result1}
            </div>
            <div>
                Result B: {result2}
            </div>
        </div>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS Secret')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div> )}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Example')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['user1', 'usar2', 'usar3', 'user4'])
    const addUsers = () => {
        const newUsers = [...users, `sveta ${new Date().getTime()}`]
        setUsers(newUsers)
    }
    const filterUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={addUsers}>add users</button>
            {counter}
            <Users users={filterUsers} />
        </div>
    )
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'CSS', 'React', 'TS'])

    const filterBook = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('') > -1)
    }, [books])
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, `js ${new Date().getTime()}`]
            setBooks(newUsers)
        }
    }, [books])
    const memoizedAddBook2 = useCallback(() => {  // Отличается от UseMemo тем что не пишется Return

            const newUsers = [...books, `js ${new Date().getTime()}`]
            setBooks(newUsers)

    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter+1)}>+</button>

            {counter}
            <Book books={filterBook} addBook={memoizedAddBook2} />
        </div>
    )
}

type BookSecretProps = {
    books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BookSecretProps) => {
    console.log('Books Secret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((book,i) => <div key={i}>{book}</div> )}
    </div>
}
const Book = React.memo(BooksSecret)