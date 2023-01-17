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
            <Accordion title='What is accordion?' />
            <Accordion title='YoYoYo?' />
            <Rating />
            <OnOf/>
        </div>
    );
}


export default App;
