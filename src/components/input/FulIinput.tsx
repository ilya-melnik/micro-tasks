import React, {ChangeEvent, MouseEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

// const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement) => {
//
// }
export const Fullinput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState("")
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
            {<h1>{title}</h1>}
        </div>
    );
};

