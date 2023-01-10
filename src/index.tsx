import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


let users = [
    {
        name: 'al',
        lastName: 'asd',
        age: 22
    },
    {
        name: 'alsdf',
        lastName: 'asddd',
        age: 25
    }
]

let b: number[] = [2,3,4,5]

console.log(users[0].age)