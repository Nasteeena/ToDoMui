import React , {useState, useContext} from 'react'
import {
    Box, 
    FormControl, 
    Input, 
    Checkbox, 
    Button, 
    FormControlLabel, 
    Typography, 
    ListItemText,  
    ListItem} from '@mui/material';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { TaskProps } from '../../interface_types/taskProps';
import { ACTION_TYPES } from '../../reducer/types';
import {TasksDipatchContext } from '../taskList/context/tasks';

export default function Task(props : TaskProps) {
    const dispatch = useContext(TasksDipatchContext);
    const {
        value, 
        id, 
        deleteTask, 
        isChecked, 
        handleChecked, 
        isVisible} = props
        
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [newValue, setNewValue] = useState<string>(value);

    function handleEdit() {
        setIsEditing(false)
    }

    function handleSaved() {
        setIsEditing(true)
        editTask(id, newValue)
    }

    function editTask(id: string, title: string) {
        dispatch({type: ACTION_TYPES.EDIT_TODO, id: id, title: title})
    }
    
    return (
        <Box sx={{ '& > :not(style)': { m: 1, width: "100%" } }} style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                {isEditing 
                ? 
                    <FormControl id={id}>
                        <Input
                            key='1'
                            sx={{ width: "100%" }}
                            disabled={isEditing}
                            startAdornment={
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            inputProps={{ "aria-label": "controlled" }}
                                            checked={isChecked}
                                            onChange={()=> handleChecked(id)}
                                        />
                                    }
                                    label={
                                        <Typography variant="body1" color={'black'}>
                                            {value}
                                        </Typography>
                                    }
                                />
                            }
                            endAdornment={
                                <> {isVisible &&
                                    <Button onClick={handleEdit}>
                                        <ModeEditOutlinedIcon/>
                                    </Button>
                                }
                                    <Button onClick={()=> deleteTask(id)}>
                                        <DeleteOutlineOutlinedIcon/>
                                    </Button>
                                </>
                            }  
                        />
                    </FormControl> 
                :
                    <FormControl id={id}>
                        <Input
                            key='2' 
                            sx={{ width: "100%" }}
                            disabled={isEditing}
                            value={newValue}
                            onChange={(e)=> setNewValue(e.target.value)}
                            endAdornment={
                                <>
                                    <Button onClick={handleSaved}>
                                        <DoneIcon/>
                                    </Button>
                                </>
                            }  
                        />
                    </FormControl>
                }
            </div>
        </Box>
    )
}
