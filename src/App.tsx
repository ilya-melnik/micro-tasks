import React, {useState} from 'react';
import './App.css';

import {Fullinput} from "./components/input/FulIinput";
import {Button} from "./components/input/Button";
import {Input} from "./components/input/Input";


// export type MesType = {
//     message: string
// }

function App() {
    let [messages, setMessages] = useState(() => [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState("")

        const addMessage = (title:string) => {
            let newMessage =  {message: title}
            setMessages([newMessage,...messages])
    }
    const collBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<Fullinput  addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={collBackButtonHandler} />

            {
                messages.map((el, index) => {
                    return (
                        <div key={index}>
                            {el.message}
                        </div>)
                })
            }
        </div>
    );
}

export default App;
