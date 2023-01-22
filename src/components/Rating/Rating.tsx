import React, {FC, useState} from "react";

type PropsRating = {
    value: number
    setValue: (id: number) => void
}

function Rating({value, setValue}: PropsRating) {

    const onChangeStar = (id: number) => {
        setValue(id)
    }
    return (
        <div>
            <Star selected={value > 0} onChangeStar={() => onChangeStar(1)} />
            <Star selected={value > 1} onChangeStar={() => onChangeStar(2)} />
            <Star selected={value > 2} onChangeStar={() => onChangeStar(3)} />
            <Star selected={value > 3} onChangeStar={() => onChangeStar(4)} />
            <Star selected={value === 5} onChangeStar={() => onChangeStar(5)} />
        </div>
    )
}

type Props = {
    selected: boolean
    onChangeStar: () => void
    // id: number
}

function Star(props: Props) {
    return (
        <span onClick={props.onChangeStar}>
            {props.selected ? <b> Star</b> : 'Star'}
        </span>
    )
}
export default Rating