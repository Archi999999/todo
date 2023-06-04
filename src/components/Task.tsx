import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {changeStatusAC, removeTaskAC} from "../state/tasksReducer";
import {MyButton} from "./MyButton";

type PropsType = {
    todoListId: string
    taskId: string
    title: string
    isDone: boolean
}

export const Task: FC<PropsType> = (
    {
        todoListId,
        taskId,
        title,
        isDone,
    }
) => {
    const dispatch = useDispatch()
    const onchangeStatus =()=>{
        dispatch(changeStatusAC(todoListId, taskId))
    }

    const removeTask = (taskId: string) =>{
        dispatch(removeTaskAC(todoListId, taskId))
    }

    return (
        <li><input type="checkbox" checked={isDone} onChange={onchangeStatus}/>
            <span>{title}</span>
            <MyButton name={'X'} onClick={()=>removeTask(taskId)}/>
        </li>
    );
};

