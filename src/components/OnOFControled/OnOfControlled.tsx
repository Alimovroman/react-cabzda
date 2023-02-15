import React, {FC, useState} from 'react';
import style from './OnOfControlled.module.css'

type OnOfTypeProps = {
    setIsOn:(isOn: boolean) => void
    isOn: boolean
}
const NewOnOfControlled: FC<OnOfTypeProps> = ({setIsOn, isOn}) => {

    const onClickHandler = (onOf: boolean) => {
        setIsOn(onOf)
    }
    return (
        <div className={style.root}>
            <button onClick={() => onClickHandler(true)} className={isOn === true ? style.greenLamp : style.buttonLamp}>
                On
            </button>
            <button onClick={() => onClickHandler(false)} className={isOn === false ? style.redLamp : style.buttonLamp}>
                Of
            </button>
            <div className={`${isOn === true ? style.greenLamp : style.redLamp} ${style.lamp}`}/>
        </div>
    );
};
const OnOfControlled = React.memo(NewOnOfControlled)

export default OnOfControlled;