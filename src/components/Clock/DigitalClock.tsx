import React, {FC} from 'react';

type PropsType = {
    hours: string
    minutes: string
    seconds: string
}
const DigitalClock: FC<PropsType> = ({hours, minutes, seconds}) => {
    return (
        <div>
            <span>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </div>
    );
};

export default DigitalClock;