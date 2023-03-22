import UniversalClock from "./Clock";
import {useEffect, useState} from "react";
import {ArrowClock} from "./ArrowClock";
import AnalogClock from "./AnalogClock";

export default {
    title: 'Clock',
    comment: UniversalClock
}

export const example1 = () => <UniversalClock/>

export const arrowClock = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime] = useState(new Date())
    let hour = time.getHours().toString()
    let minute = time.getMinutes().toString()
    let second = time.getSeconds().toString()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])


    return <ArrowClock hours={hour} minutes={minute} seconds={second} />
}

export const analogClock = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime] = useState(new Date())
    let hour = time.getHours().toString()
    let minute = time.getMinutes().toString()
    let second = time.getSeconds().toString()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])
    return <AnalogClock hours={hour} minutes={minute} seconds={second} />
}