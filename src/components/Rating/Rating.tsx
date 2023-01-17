import React, {FC, useState} from "react";

type PropsRating = {

}

function Rating () {
    const [value, setValue] = useState<number>(0)
    const onChangeStar = (id: number) => {
        setValue(id)
    }
        return (
            <div>
                <Star selected={value > 0 } onChangeStar={onChangeStar} id={1}/>
                <Star selected={value > 1 } onChangeStar={onChangeStar} id={2}/>
                <Star selected={value > 2 } onChangeStar={onChangeStar} id={3}/>
                <Star selected={value > 3 } onChangeStar={onChangeStar} id={4}/>
                <Star selected={value ===5 } onChangeStar={onChangeStar} id={5}/>
            </div>
        )
}

type Props = {
    selected: boolean
    onChangeStar: (id: number) => void
    id: number
}

function Star(props: Props) {
    return (
        props.selected
            ?  <span onClick={() => props.onChangeStar(props.id)}><b> Star</b></span>
            :  <span onClick={() => props.onChangeStar(props.id)}> Star</span>
    )

}
// onClick={() => props.onChangeStar(props.id)}
export default Rating