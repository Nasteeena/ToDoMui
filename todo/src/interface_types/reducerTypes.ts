export type TaskProp = {
    checked: boolean,
    title: string,
    id: string
}

export type TaskProps = {
    todoList: TaskProp[]
}