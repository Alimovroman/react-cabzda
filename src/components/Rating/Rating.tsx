import React, {FC} from "react";

type PropsRating = {
    value: number
}

function Rating ({value}: PropsRating) {
        return (
            <div>
                <Star selected={value > 0 }/>
                <Star selected={value > 1 }/>
                <Star selected={value > 2 }/>
                <Star selected={value > 3 }/>
                <Star selected={value ===5 }/>
            </div>
        )
}

type Props = {
    selected: boolean
}

function Star(props: Props) {
    if (props.selected) {
        return <span><b> Star</b></span>
    } else {
        return <span> Star</span>
    }
}

export default Rating