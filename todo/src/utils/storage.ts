import { TaskProp } from "../interface_types/reducerTypes";
import { STORAGE } from "./defaultValues";
export const storage = {
    setTasks: (value: TaskProp[])=> {
        localStorage.setItem(STORAGE.KEY, JSON.stringify(value))
    },
    getTasks:()=> {
        const tasks = localStorage.getItem(STORAGE.KEY);
        if(tasks) {
            const tasksList = JSON.parse(tasks);
            return tasksList
        }
    }
}

