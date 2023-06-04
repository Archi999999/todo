import {todolistId1, todolistId2} from "./tasksReducer";

export type TodoListType = {
    id: string
    title: string
    filter: 'all' | 'active' | 'completed'
}

const initialState: TodoListType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]

export const todoListsReducer = (state = initialState, action: ActionsType): TodoListType[] => {
    switch (action.type) {
        case "ADD_TODO_LIST": {
            return [{id: action.payload.todoListId, title: action.payload.title, filter: "all"}, ...state]
        }
        case "REMOVE_TODO_LIST": {
            return state.filter(list=> list.id !== action.payload.todolistId)
        }
        default:
            return state
    }
}

type ActionsType = AddTodoListACType | RemoveTodoListType

export type AddTodoListACType = ReturnType<typeof addTodoListAC>

export const addTodoListAC = (todoListId: string, title: string) => {
    return {
        type: "ADD_TODO_LIST",
        payload: {
            todoListId,
            title
        }
    } as const
}

export type RemoveTodoListType = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC = (todolistId: string) => {
    return {
        type: 'REMOVE_TODO_LIST',
        payload: {
            todolistId
        }
    }as const
}
