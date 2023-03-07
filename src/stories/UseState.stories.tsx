import React, {useMemo, useState} from "react";

export default {
    title: 'UseState'
}

function generateDate() {
    console.log('generalDate')
    return 1
}
export const example1 = () => {
    console.log('example1')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const value = useMemo( () => generateDate(), [] )
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[counter, setCounter] = useState(generateDate)
    const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}