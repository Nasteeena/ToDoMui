import React, {useContext} from 'react'
import Task from '../task';
import { TasksContext, TasksDipatchContext } from './context/tasks';
import { ACTION_TYPES } from '../../reducer/types';
import {List, Box} from '@mui/material'
import { TaskProp } from '../../interface_types/reducerTypes';
import { LIST_TITLE } from '../../utils/defaultValues';

export default function TaskList() {
    const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDipatchContext);

    function deleteTask(id: string) {
        dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: id });
    }

    function handleChecked(id: string, checked: boolean) {
        dispatch({type: ACTION_TYPES.CHECKED_TODO, id: id, checked: !checked})
    }

    const checkedList = tasks.filter((task: TaskProp)=> task.checked)
    const notCheckedList = tasks.filter((task: TaskProp)=> !task.checked)

    return (
        <>
            {notCheckedList.length > 0
                && 
                    <Box marginTop={'20px'}>
                        {notCheckedList.length
                && 
                    <List subheader={`${LIST_TITLE.PLAN}(${notCheckedList.length})`}>
                        {notCheckedList.map((item: TaskProp)=> {
                                return (
                                    <>
                                        <Task 
                                            id={item.id}
                                            isVisible={true}
                                            value={item.title} 
                                            isChecked={item.checked}
                                            handleChecked={()=> handleChecked(item.id, item.checked)}
                                            deleteTask={()=> deleteTask(item.id)} 
                                            key={item.id}
                                        />
                                    </>
                                );
                                })}
                    </List>
                    }
                    </Box>
            }
            {checkedList.length > 0
                && 
                    <Box marginTop={'20px'}>
                        {checkedList.length
                && 
                <List subheader={`${LIST_TITLE.READY}(${checkedList.length})`}>
                    {
                        checkedList.map((item: TaskProp)=> {
                            return (
                                <>
                                    <Task 
                                        id={item.id}
                                        isVisible={false}
                                        value={item.title} 
                                        isChecked={item.checked}
                                        handleChecked={()=> handleChecked(item.id, item.checked)}
                                        deleteTask={()=> deleteTask(item.id)} 
                                        key={item.id}
                                    />
                                </>
                            );
                            })
                    }
                </List>
                        }
                    </Box>
            }
        </>
    )
}