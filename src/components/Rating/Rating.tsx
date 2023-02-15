import React, {FC, useState} from "react";

type PropsRating = {
    value: number
    setValue: (id: number) => void
}

function RatingControlled({value, setValue}: PropsRating) {
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
const Rating = React.memo(RatingControlled)

type Props = {
    selected: boolean
    onChangeStar: () => void
    // id: number
}

function StarControlled(props: Props) {
    return (
        <span onClick={props.onChangeStar}>
            {props.selected ? <b> Star</b> : 'Star'}
        </span>
    )
}
const Star = React.memo(StarControlled)
export default Rating