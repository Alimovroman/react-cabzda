import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOf from "./components/OnOf/OnOf";

function App() {
    return (
        <div>
            <input value={'yo'}/>
            <input type={"date"}/>
            <Accordion title='What is accordion?' collapsed={true}/>
            <Accordion title='YoYoYo?' collapsed={false}/>
            <Rating value={2}/>
            <OnOf isOn={false}/>
        </div>
    );
}


export default App;
