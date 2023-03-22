import React, {FC, useEffect, useState} from 'react';
import ReactClock from '@uiw/react-clock';
import style from './Clock.module.css'
import {ArrowClock} from "./ArrowClock";
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";


const get2digitString = (num: number) => num < 10 ? `0${num}` : num.toString()

type PropsType = {
    mode?: 'digital' | 'analog'
}
const UniversalClock: FC<PropsType> = ({mode}) => {
    const [currentData, setCurrentData] = useState(new Date())
    const [isShowArrowClock, setIsShowArrowClock] = useState(false)


    let hours = get2digitString(currentData.getHours()) // currentData.getHours() < 10 ? `0${currentData.getHours()}` : currentData.getHours()
    let minutes = get2digitString(currentData.getMinutes()) //currentData.getMinutes() < 10 ? `0${currentData.getMinutes()}` : currentData.getMinutes()
    let seconds = get2digitString(currentData.getSeconds()) //currentData.getSeconds() < 10 ? `0${currentData.getSeconds()}` : currentData.getSeconds()


    useEffect(() => {
        let showClock = setInterval(() => {
            console.log('tick')
            setCurrentData(new Date())
        }, 1000)

        return () => {
            clearInterval(showClock)
        }
    }, [])

    const onChangeClock = () => {
        setIsShowArrowClock(!isShowArrowClock)
    }
    console.log('render')
    return (
        <div>
            {isShowArrowClock

                ? <>
                    <ArrowClock seconds={seconds} hours={hours} minutes={minutes}/>
                    <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
                </>

                : <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
            }
            <button onClick={onChangeClock}>Change clock</button>
        </div>
    )
};


export default UniversalClock;