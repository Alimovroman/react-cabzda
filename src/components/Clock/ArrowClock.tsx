import React, {FC} from "react";
import style from "./Clock.module.css";

type ArrowClockProps = {
    hours: string
    minutes: string
    seconds: string
}
export const ArrowClock: FC<ArrowClockProps> = ({hours, minutes, seconds}) => {
    return (
        <div className={style.clock}>
            <div className={style.hour + ' ' + style.hand}
                 style={{transform: `translate(-50%) rotate(${(+hours / 12) * 360}deg)`}}></div>
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