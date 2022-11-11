import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Counter} from "./components/useState";
import {Filter} from "./components/Filter";


const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]


function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, 45)
    }
    const JustButton = () => {
        console.log('I\'m just button')
    }
    //-----------------------------------------------------------

    return (
        <div className="App">
            <Button name={'MyYoutubeChanel-1'} callBack={() => {
                Button1Foo('ILLIA', 22)
            }}/>
            <Button name={'MyYoutubeChanel-2'} callBack={() => {
                Button2Foo('Vasya', 33)
            }}/>
            <Button name={'justButton'} callBack={JustButton}/>
            {/*-------------------------------------------------------------*/}
           <Counter />
            <Filter />
        </div>
    );
}

export default App;
