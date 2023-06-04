import React, {FC} from 'react';

type PropsType = {
    name: string
    onClick: ()=>void
}

export const MyButton: FC<PropsType> = (
    {
        name,
        onClick,
    }
) => {
    return (
        <button onClick={onClick}>{name}</button>
    );
};

