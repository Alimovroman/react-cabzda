import React, {FC, useEffect, useState} from 'react';
import ReactClock from '@uiw/react-clock';
import style from './Clock.module.css'


const get2digitString = (num: number) => num < 10 ? `0${num}` : num.toString()

const UniversalClock = () => {
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
                ? <ArrowClock seconds={seconds} hours={hours} minutes={minutes}/>
                : <div>
                    <span>{hours}:</span>
                    <span>{minutes}:</span>
                    <span>{seconds}</span>

                </div>
            }
            <button onClick={onChangeClock}>Change clock</button>
        </div>
    )
};

type ArrowClockProps = {
    hours: string
    minutes: string
    seconds: string

}
const ArrowClock: FC<ArrowClockProps> = ({hours, minutes, seconds}) => {
    return (
        <div className={style.clock}>
            <div className={style.hour + ' ' + style.hand}
                 style={{transform: `translate(-50%) rotate(${(+hours / 60) * 360}deg)`}}></div>
            <div className={style.minute + ' ' + style.hand}
                 style={{transform: `translate(-50%) rotate(${(+minutes / 60) * 360}deg)`}}></div>
            <div className={style.second + ' ' + style.hand}
                 style={{transform: `translate(-50%) rotate(${(+seconds / 60) * 360}deg)`}}></div>

            <div className={style.number + ' ' + style.number1}>
                <div>1</div>
            </div>
            <div className={style.number + ' ' + style.number2}>
                <div>2</div>
            </div>
            <div className={style.number + ' ' + style.number3}>
                <div>3</div>
            </div>
            <div className={style.number + ' ' + style.number4}>
                <div>4</div>
            </div>
            <div className={style.number + ' ' + style.number5}>
                <div>5</div>
            </div>
            <div className={style.number + ' ' + style.number6}>
                <div>6</div>
            </div>
            <div className={style.number + ' ' + style.number7}>
                <div>7</div>
            </div>
            <div className={style.number + ' ' + style.number8}>
                <div>8</div>
            </div>
            <div className={style.number + ' ' + style.number9}>
                <div>9</div>
            </div>
            <div className={style.number + ' ' + style.number10}>
                <div>10</div>
            </div>
            <div className={style.number + ' ' + style.number11}>
                <div>11</div>
            </div>
            <div className={style.number + ' ' + style.number12}>
                <div>12</div>
            </div>

        </div>
    )
}

export default UniversalClock;