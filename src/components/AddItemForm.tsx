import React, {ChangeEvent, FC, useState} from 'react';

type PropsType = {
    onClick: (title:string) => void
}
export const AddItemForm: FC<PropsType> = (
    {
        onClick
    }
) => {

    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () =>{
        setTitle('');
        onClick(title)
    }

    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

