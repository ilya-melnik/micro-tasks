import React, {useState} from 'react';


export const Counter = () => {

    let [a, setA] = useState(1)
    let [reset, resetCount] = useState(0)

    const onClickHandler1 = () => {
        setA(++a)
    }
    const onClickHandler2 = () => {
        setA(reset)
    }
    return (
        <div>
            <h1>{a}</h1>

            <button onClick={onClickHandler1}>Count++</button>
            <button onClick={onClickHandler2}>rest</button>

        </div>
    );
};
