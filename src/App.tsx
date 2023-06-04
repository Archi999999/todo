import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "./state/store";
import {addTodoListAC, TodoListType} from "./state/todoListsReducer";
import {AddItemForm} from "./components/AddItemForm";
import {v1} from "uuid";

function App() {
    const todoLists = useSelector<RootReducer, TodoListType[]>(state => state.todoLists)

    const dispatch = useDispatch()

    const addTodoList = (title: string) => {
        const todoListId = v1()
        dispatch(addTodoListAC(todoListId, title))
    }

    return (
        <div className="App">
            <AddItemForm onClick={addTodoList}/>
            {todoLists.map(list => {
                return (


                    <TodoList key={list.id} todoListId={list.id} title={list.title}/>

                )
            })
            }
        </div>
    );
}


export default App;
