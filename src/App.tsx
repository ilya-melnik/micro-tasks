import React, {useState} from 'react';
import './App.css';

import {Fullinput} from "./components/input/FulIinput";


// export type MesType = {
//     message: string
// }

function App() {
    let [messages, setMessages] = useState(() => [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
        const addMessage = (title:string) => {
            let newMessage =  {message: title}
            setMessages([newMessage,...messages])
    }
    return (
        <div className="App">
            <Fullinput  addMessage={addMessage}/>
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
