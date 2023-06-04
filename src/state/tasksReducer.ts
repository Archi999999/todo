import {v1} from "uuid";
import {AddTodoListACType, RemoveTodoListType} from "./todoListsReducer";

export const todolistId1 = v1();
export const todolistId2 = v1();

export type TasksType = {
    [key: string]: TaskType[]
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const initialState: TasksType = {
    [todolistId1]:
        [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "TypeScript", isDone: false}
        ],
    [todolistId2]:
        [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: false},
            {id: v1(), title: "Book", isDone: true}
        ]
}

export const tasksReducer = (state = initialState, action: ActionsType): TasksType => {
    switch (action.type) {
        case "REMOVE_TASK": {
            return {
                ...state, [action.payload.todoListId]: state[action.payload.todoListId]
                    .filter(task => task.id !== action.payload.taskId)
            }
        }
        case "ADD_TASK": {
            return {
                ...state, [action.payload.todoListId]:
                    [{id: v1(), title: action.payload.title, isDone: false}
                        , ...state[action.payload.todoListId]]
            }
        }
        case "ADD_TODO_LIST": {
            return {...state, [action.payload.todoListId]: []}
        }
        case "CHANGE_STATUS": {
            return {
                ...state, [action.payload.todoListId]: state[action.payload.todoListId]
                    .map(task => task.id === action.payload.taskId
                        ? {...task, isDone: !task.isDone}
                        : task
                    )
            }
        }
        case "REMOVE_TODO_LIST": {
            const newState = {...state}
            delete newState[action.payload.todolistId]
            return newState
        }
        default:
            return state
    }
}

type ActionsType =
    ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | AddTodoListACType
    | ReturnType<typeof changeStatusAC>
    | RemoveTodoListType

export const removeTaskAC = (todoListId: string, taskId: string) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            todoListId,
            taskId
        }
    } as const
}

export const addTaskAC = (todoListId: string, title: string) => {
    return {
        type: 'ADD_TASK',
        payload: {
            todoListId,
            title
        }
    } as const
}

export const changeStatusAC = (todoListId: string, taskId: string) => {
    return {
        type: 'CHANGE_STATUS',
        payload: {
            todoListId,
            taskId
        }
    } as const
}
