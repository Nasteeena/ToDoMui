import React, { useReducer, useState } from 'react'
import Header from '../header'
import TaskInput from '../taskInput'
import TaskList from '../taskList'
import { initialState, reducerTodo } from '../../reducer/reducerTodo'
import { TasksContext, TasksDipatchContext } from '../taskList/context/tasks'

export default function Main() {
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [state, dispatch] = useReducer(reducerTodo, initialState);

    return (
        <TasksContext.Provider value={state.todoList}>
            <TasksDipatchContext.Provider value={dispatch}>
                <div>
                    <Header title='TODO' fontSize='3rem'/>
                    <TaskInput
                        isDisabled={isDisabled}
                    />
                    <TaskList/>
                </div>
            </TasksDipatchContext.Provider>
        </TasksContext.Provider>
    )
}
