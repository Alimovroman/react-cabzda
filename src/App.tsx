import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOf from "./components/OnOf/OnOf";
import OnOfControlled from "./components/OnOFControled/OnOfControlled";

function App() {
    const [value, setValue] = useState<number>(0)
    const [isOn, setIsOn] = useState<boolean>(true)

    return (
        <div>
            <input value={'yo'}/>
            <input type={"date"}/>
            <Accordion title='What is accordion?' />
            <Accordion title='YoYoYo?' />
            <Rating value={value} setValue={setValue}/>
            <OnOf setIsOn={setIsOn}/> {isOn.toString()}
            {/*<OnOfControlled setIsOn={setIsOn} isOn={isOn}/>*/}
        </div>
    );
}


export default App;
