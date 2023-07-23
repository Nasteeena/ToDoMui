import React, {useState, useContext} from 'react'
import {TextField, Button, InputAdornment } from '@mui/material'
import { TaskInputProps } from '../../interface_types/taskInputProps';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { TasksDipatchContext } from '../taskList/context/tasks';
import { DEFAULT } from '../../utils/defaultValues';
import { toUpper } from '../../utils/makeUpper';
import { ACTION_TYPES } from '../../reducer/types';

export default function TaskInput({isDisabled}: TaskInputProps) {
    const [value, setValue] = useState<string>(DEFAULT.EMPTY_STRING);
    const dispatch = useContext(TasksDipatchContext)

    function addTask(e: React.FormEvent) {
        e.preventDefault();
        const newTask = {title: toUpper(value), checked: false, id: Date.now().toString()}
        if(value) {
            dispatch({type: ACTION_TYPES.ADD_TODO, payload: newTask})
            setValue(DEFAULT.EMPTY_STRING);
        } 
        console.log(1)
    }

    return (
        <form onSubmit={addTask}>
            <TextField 
                id="standard-basic" 
                label="Name of the new task"
                variant="standard"
                value={toUpper(value)}
                onChange={(e)=> setValue(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button type='submit'>
                                <AddOutlinedIcon/>
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    )
}
