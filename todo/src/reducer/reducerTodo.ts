import { ACTION_TYPES } from "./types"
import { TaskProps } from "../interface_types/reducerTypes"
import { DEFAULT } from "../utils/defaultValues"
import { storage } from "../utils/storage"

export const initialState: TaskProps = {
    todoList: storage.getTasks() || DEFAULT.EMPTY_ARRAY
}

export function reducerTodo(state: TaskProps, action: any) {
    switch(action.type) {
        case ACTION_TYPES.ADD_TODO:
            const updated = [...state.todoList, action.payload];
            storage.setTasks(updated)
            return {...state, todoList: updated}
        case ACTION_TYPES.DELETE_TODO:
            const deletedList = state.todoList.filter((item: any)=> item.id !== action.payload);
            storage.setTasks(deletedList);
            return {...state, todoList: deletedList}
        case ACTION_TYPES.EDIT_TODO:
            const edited = state.todoList.map((item: any)=> {
                if(item.id === action.id) {
                    return {...item, title: action.title}
                } else {
                    return item
                }
            })
            storage.setTasks(edited)
            return {...state, todoList: edited}
        case ACTION_TYPES.CHECKED_TODO:
            const checked = state.todoList.map((item: any)=> {
                if(item.id === action.id) {
                    return {...item, checked: action.checked}
                } else {
                    return item
                }
            })
            storage.setTasks(checked)
            return {...state, todoList: checked}
        default: 
            return state
    }
} 