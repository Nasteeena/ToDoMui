export type TaskProps = {
    value: string,
    id: string,
    deleteTask: (id: string)=> void,
    isChecked: boolean,
    handleChecked: (id: string)=> void,
    isVisible: boolean
}