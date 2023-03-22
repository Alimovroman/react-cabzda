import React, {FC} from 'react';
import style from './AnalogClock.module.css'


type PropsType = {
    hours: string
    minutes: string
    seconds: string
}
const AnalogClock: FC<PropsType> = ({hours, minutes, seconds}) => {
    const secondsStyle = {
        transform: `rotate(${+seconds * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${+minutes * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${+hours * 30}deg)`
    };
    return (
        <div className={style.clock}>
            <h3>Ryazan</h3>
            <div className={style.analogClock}>
                <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
                <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
                <div className={`${style.dial} ${hours}`} style={hoursStyle} />
            </div>
            <div className={style.digitalClock}></div>
        </div>
    );
};

export default AnalogClock;