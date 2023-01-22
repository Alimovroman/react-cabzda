import React, {FC, useState} from 'react';
import style from './OnOf.module.css'

type OnOfTypeProps = {
    setIsOn: (on: boolean) => void
}
const OnOf: FC<OnOfTypeProps> = (props) => {
    const [isOn, setIsOn] = useState<boolean>(true)
    const onClickHandler = (onOf: boolean) => {
        setIsOn(onOf)
        props.setIsOn(onOf)
    }


    return (
        <div className={style.root}>
            <button onClick={() => onClickHandler(true)} className={isOn === true ? style.greenLamp : style.buttonLamp}>
                On
            </button>
            <button onClick={() => onClickHandler(false)}
                    className={isOn === false ? style.redLamp : style.buttonLamp}>Of
            </button>
            <div className={`${isOn === true ? style.greenLamp : style.redLamp} ${style.lamp}`}></div>
        </div>
    );
};

export default OnOf;