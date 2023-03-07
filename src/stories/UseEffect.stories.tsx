import React, {useEffect, useState} from "react";
export default {
    title: 'UseEffect'
}

export const example1 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fake, setFake] = useState(0)
    console.log('example1')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])
    return (
        <div>
            <button onClick={() => setFake(fake+1)}>+</button>
            {fake}
        </div>
    )
}
export const setTimeoutExample = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [counter, setCounter] = useState(0)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fake, setFake] = useState(0)
    console.log('example1')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            document.title = 'Yoyoyoy'
            console.log('sadad')
        }, 2000)
    }, [counter])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setInterval(() => {
            console.log(counter)
            setCounter(state => state +1)
        }, 1000)
    },[])

    return (
        <div>
            <button onClick={() => setFake(fake + 1)}>+</button>
            {fake}
            <div>
                counter: {counter}
            </div>
        </div>
    )
}
export const clock = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentData, setCurrentData] = useState(new Date())
    let hours = currentData.getHours()
    let minutes = currentData.getMinutes()
    let seconds = currentData.getSeconds()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setInterval(() => {
            setCurrentData(new Date())
        },1000)
    }, [currentData])
    console.log(hours)
    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}