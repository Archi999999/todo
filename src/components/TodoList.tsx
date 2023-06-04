import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../state/store";
import {addTaskAC, TaskType} from "../state/tasksReducer";
import {MyButton} from "./MyButton";
import {Task} from "./Task";
import {AddItemForm} from "./AddItemForm";
import {removeTodoListAC} from "../state/todoListsReducer";

type PropsType = {
    todoListId: string
    title: string
}
export const TodoList: FC<PropsType> = (
    {
        todoListId,
        title,
    }
) => {
    const tasks = useSelector<RootReducer, TaskType[]>(store => store.tasks[todoListId])
    const dispatch = useDispatch()
    const addTask = (title: string) => {
        dispatch(addTaskAC(todoListId, title))
    }

    const removeTodoList = () => {
        dispatch(removeTodoListAC(todoListId))
    }


    return (
        <div>
            <h3 style={{display: 'inline-block'}}>{title}</h3>
            <MyButton name={'X'} onClick={removeTodoList}/>
            <AddItemForm onClick={addTask}/>
            <ul>
                {tasks.map(task => {
                    return <Task key={task.id} todoListId={todoListId} taskId={task.id} title={task.title}
                                 isDone={task.isDone}/>
                })}
            </ul>
            <div>
                <MyButton name={'All'} onClick={() => {
                }}/>
                <MyButton name={'Active'} onClick={() => {
                }}/>
                <MyButton name={'Completed'} onClick={() => {
                }}/>
            </div>
        </div>
    )
}
