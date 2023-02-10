import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOf from "./components/OnOf/OnOf";
import OnOfControlled from "./components/OnOFControled/OnOfControlled";

function App() {
    const [value, setValue] = useState<number>(0)
    const [isOn, setIsOn] = useState<boolean>(true)
    const items: ItemType[][] = [
        [{title: '1', value: 1},{title: '2', value: 2}, {title: '3', value: 3}],
        [{title: 'yo', value: 1},{title: 'yo yo', value: 2}, {title: 'yo yo yo', value: 3}],
    ]
    const onClick = (e: any) => {
        alert(e)
    }
    return (
        <div>
            <input value={'yo'}/>
            <input type={"date"}/>
            <Accordion title='What is accordion?' items={items[0]} onClick={onClick}/>
            <Accordion title='YoYoYo?' items={items[1]} onClick={onClick}/>
            <Rating value={value} setValue={setValue}/>
            <OnOf setIsOn={setIsOn}/> {isOn.toString()}
            {/*<OnOfControlled setIsOn={setIsOn} isOn={isOn}/>*/}
        </div>
    );
}


export default App;
