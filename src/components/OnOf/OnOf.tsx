import React, {FC} from 'react';
import style from './OnOf.module.css'

type OnOfTypeProps = {
    isOn: boolean
}
const OnOf: FC<OnOfTypeProps> = ({isOn}) => {
    return (
        <div className={style.root}>
            <button className={isOn === true ? style.greenLamp : style.buttonLamp}>On</button>
            <button className={isOn === false ? style.redLamp : style.buttonLamp}>Of</button>
            <div className={`${isOn === true ? style.greenLamp : style.redLamp} ${style.lamp}`}></div>
        </div>
    );
};

export default OnOf;