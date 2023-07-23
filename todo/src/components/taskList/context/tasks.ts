import { createContext } from "react";
import { TaskProp } from "../../../interface_types/reducerTypes";
import { DEFAULT } from "../../../utils/defaultValues";

export const TasksContext = createContext<TaskProp[]>(DEFAULT.EMPTY_ARRAY);
export const TasksDipatchContext = createContext<any>('');