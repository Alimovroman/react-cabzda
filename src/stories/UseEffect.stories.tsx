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
export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(0)

    const [fake, setFake] = useState(0)
    console.log('example1')

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            document.title = 'Yoyoyoy'
            console.log('sadad')
        }, 2000)

    }, [counter])

    useEffect(() => {
        let counterInterval = setInterval(() => {
            console.log(counter)
            setCounter(state => state +1)
        }, 1000)

        return () => {
            clearInterval(counterInterval)
        }
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

export const ResetUseEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('component render')
    useEffect(() => {
        console.log('useEffect finished')

        return () => {
            console.log('reset Effect')
        }
    }, [])
    return (
        <div>
            {counter}
            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    )

}



export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('component render' + text)

    useEffect(() => {
        const showKeyPress = (e: KeyboardEvent ) => {
            console.log(e.key)
            setText( text + e.key)
        }
        window.document.addEventListener('keypress', showKeyPress)
        console.log('useEffect')
        return () => {
            // window.document.removeEventListener('keypress', showKeyPress)
        }
    }, [text])
    return (
        <div>
            Typed text: {text}
        </div>
    )
}
