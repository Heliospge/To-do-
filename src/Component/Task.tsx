 import { Pencil , Trash } from "lucide-react";
import type { TaskProps } from "../types.ts";
import './Task.css'
 


export default function Task({task, EditTaskName, DeleteTask }: TaskProps) {

    return (
        <div className="task-card">
            {task.name}
            <button onClick={() => EditTaskName(task.id, task.name)}><Pencil /></button>
            <button onClick={() => DeleteTask(task.id)}><Trash /></button>
        </div>
    )
}